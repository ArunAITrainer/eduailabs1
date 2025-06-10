'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'

interface User {
  email: string;
  name: string;
  selectedArticles: number[];
  completedArticles: number[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, name: string, password: string) => Promise<boolean>;
  logout: () => void;
  changePassword: (currentPassword: string, newPassword: string) => Promise<boolean>;
  selectArticle: (articleId: number) => void;
  completeArticle: (articleId: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find((u: User & { password: string }) => u.email === email && u.password === password)
    if (user) {
      const userData = { 
        email: user.email, 
        name: user.name, 
        selectedArticles: user.selectedArticles || [],
        completedArticles: user.completedArticles || []
      }
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return true
    }
    return false
  }

  const signup = async (email: string, name: string, password: string) => {
    if (!isPasswordValid(password)) {
      throw new Error("Password must contain at least one special character, one capital letter, and one number.")
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    if (users.some((u: User) => u.email === email)) {
      return false // User already exists
    }
    const newUser = { email, name, password, selectedArticles: [], completedArticles: [] }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    setUser({ email, name, selectedArticles: [], completedArticles: [] })
    localStorage.setItem('user', JSON.stringify({ email, name, selectedArticles: [], completedArticles: [] }))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const changePassword = async (currentPassword: string, newPassword: string) => {
    if (!user) return false
    if (!isPasswordValid(newPassword)) {
      throw new Error("New password must contain at least one special character, one capital letter, and one number.")
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const userIndex = users.findIndex((u: User & { password: string }) => u.email === user.email)
    if (userIndex === -1 || users[userIndex].password !== currentPassword) {
      return false
    }
    users[userIndex].password = newPassword
    localStorage.setItem('users', JSON.stringify(users))
    return true
  }

  const selectArticle = (articleId: number) => {
    if (!user) return
    const updatedUser = {
      ...user,
      selectedArticles: [...new Set([...user.selectedArticles, articleId])]
    }
    setUser(updatedUser)
    localStorage.setItem('user', JSON.stringify(updatedUser))
    updateUserInStorage(updatedUser)
  }

  const completeArticle = (articleId: number) => {
    if (!user) return
    const updatedUser = {
      ...user,
      completedArticles: [...new Set([...user.completedArticles, articleId])]
    }
    setUser(updatedUser)
    localStorage.setItem('user', JSON.stringify(updatedUser))
    updateUserInStorage(updatedUser)
  }

  const updateUserInStorage = (updatedUser: User) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const userIndex = users.findIndex((u: User) => u.email === updatedUser.email)
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updatedUser }
      localStorage.setItem('users', JSON.stringify(users))
    }
  }

  const isPasswordValid = (password: string) => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/
    const capitalLetterRegex = /[A-Z]/
    const numberRegex = /[0-9]/
    return specialCharRegex.test(password) && capitalLetterRegex.test(password) && numberRegex.test(password)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, changePassword, selectArticle, completeArticle }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

