"use client"
import React, { useEffect } from 'react'
import { useSession, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) router.push('/login')
  }, [session, router])

  if (!session) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-gray-500">Loading dashboard…</div>
    </div>
  )

  const username = session.user?.name || (session.user?.email || '').split('@')[0]

  const stats = [
    { id: 1, label: 'Fans', value: 1286 },
    { id: 2, label: 'Tips', value: 342 },
    { id: 3, label: 'Earnings', value: '$4,820' }
  ]

  const recent = [
    { id: 1, name: 'Asha', amount: '$10', avatar: '' },
    { id: 2, name: 'Liam', amount: '$25', avatar: '' },
    { id: 3, name: 'Noah', amount: '$5', avatar: '' }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Welcome back, {session.user?.name || 'Creator'}</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push(`/${username}`)}
              className="px-4 py-2 bg-transparent border border-slate-700 text-slate-100 rounded-md text-sm hover:bg-slate-800 hover:scale-[1.02] transition">View Profile</button>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-rose-500 text-white rounded-md text-sm hover:bg-rose-600 transition">Sign out</button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1 bg-slate-800 rounded-lg shadow-md p-5 border border-slate-700">
            <div className="flex flex-col items-center text-center">
              {session.user?.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={session.user.image} alt="avatar" className="h-24 w-24 rounded-full object-cover mb-3 ring-1 ring-slate-700" />
              ) : (
                <div className="h-24 w-24 rounded-full bg-slate-700 mb-3 flex items-center justify-center text-slate-300 text-xl">{(session.user?.name || 'U')[0]}</div>
              )}
              <div className="font-medium text-slate-100">{session.user?.name}</div>
              <div className="text-xs text-slate-400">{session.user?.email}</div>
              <div className="mt-4 w-full">
                <button onClick={() => router.push('/dashboard')} className="w-full px-3 py-2 bg-indigo-600 text-white rounded-md mb-2 hover:bg-indigo-700 transition">Dashboard</button>
                <button onClick={() => router.push(`/${username}`)} className="w-full px-3 py-2 border border-slate-700 text-slate-100 rounded-md hover:bg-slate-800 transition">My Page</button>
              </div>
            </div>
          </aside>

          <main className="md:col-span-3">
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {stats.map(s => (
                <div key={s.id} className="bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-700 hover:shadow-lg transition">
                  <div className="text-sm text-slate-400">{s.label}</div>
                  <div className="text-2xl font-semibold">{s.value}</div>
                </div>
              ))}
            </section>

            <section className="bg-slate-800 rounded-lg p-4 shadow-sm mb-6 border border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-medium">Recent Supporters</h2>
                <button className="text-sm text-indigo-400 hover:underline">View all</button>
              </div>
              <ul className="space-y-3">
                {recent.map(r => (
                  <li key={r.id} className="flex items-center justify-between hover:bg-slate-850/50 rounded-md p-2 transition">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300">{r.name[0]}</div>
                      <div>
                        <div className="font-medium">{r.name}</div>
                        <div className="text-xs text-slate-400">Thank you message</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium">{r.amount}</div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-700">
              <h2 className="text-lg font-medium mb-3">Activity</h2>
              <div className="text-sm text-slate-400">No recent activity — start promoting your page to get supporters!</div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
