"use client"

import { motion } from "framer-motion"
import { ArrowRight, Coins, DiscIcon as Discord, LineChart, Lock, Users, Wallet } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BackgroundBeams } from "@/components/background-beams"
import { TracingBeam } from "@/components/tracing-beam"

export default function TokenPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* ヒーローセクション */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden">
        <BackgroundBeams />
        <div className="container relative z-10 mx-auto flex flex-col items-center gap-8 px-4 text-center">
          {/* トークンアイコン */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-32 w-32 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 p-1"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
              <Coins className="h-16 w-16 text-white" />
            </div>
            <div className="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 opacity-20 blur-xl" />
          </motion.div>

          {/* メインキャッチコピー */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="inline-flex items-center justify-center">
              <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#0EA5E9_50%,#E2E8F0_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
                  </span>
                  Web3 × Discord × DAO
                </div>
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              PoWT：エンジニアの貢献が
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                価値になるトークン
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-base text-slate-300 md:text-lg lg:text-xl">
              ProofOfWorkDAOが発行する「PoWT」は、エンジニアの開発貢献に応じて配布されるガバナンストークンです。
              <br className="hidden sm:inline" />
              オープンで透明なエコシステムを支える基盤となるトークンです。
            </p>
          </motion.div>

          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="h-12 bg-gradient-to-r from-blue-600 to-emerald-600 px-6 text-white hover:from-blue-700 hover:to-emerald-700"
              asChild
            >
              <Link href="/connect">
                <Discord className="mr-2 h-5 w-5" />
                Discordで開発する
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-slate-700 bg-slate-900/50 px-6 text-white backdrop-blur hover:bg-slate-900/80"
              asChild
            >
              <Link href="https://app.uniswap.org" target="_blank">
                UniswapでPoWTを購入
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* 統計情報 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute inset-x-0 bottom-0 z-20 mx-auto w-full max-w-4xl"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/10 to-transparent" />
            <div className="mx-auto grid max-w-sm grid-cols-3 gap-8 px-4 py-8 text-center md:max-w-2xl md:grid-cols-3 lg:max-w-4xl">
              <div>
                <div className="text-2xl font-bold text-white">100M</div>
                <div className="text-sm text-slate-400">Total Supply</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">1M+</div>
                <div className="text-sm text-slate-400">PoWT Distributed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400">Active Holders</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <TracingBeam>
        {/* PoWTの活用方法 */}
        <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 lg:py-32">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                PoWTの活用方法
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                PoWTトークンは、ProofOfWorkDAOのエコシステムを支える基盤です
              </p>
            </motion.div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <Card className="group relative h-full overflow-hidden border-slate-800 bg-slate-900/50 transition-colors hover:border-slate-700">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(59,130,246,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative space-y-6 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                      <Discord className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">エンジニア報酬</h3>
                      <p className="mt-3 text-slate-400">
                        Discordでコードを貢献すると、PoWTが自動的に支払われます。貢献度が高いほど、より多くのトークンを獲得できます。
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <Card className="group relative h-full overflow-hidden border-slate-800 bg-slate-900/50 transition-colors hover:border-slate-700">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(16,185,129,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative space-y-6 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                      <Users className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">ガバナンス投票</h3>
                      <p className="mt-3 text-slate-400">
                        DAOの意思決定に参加できます。保有量に応じて投票権が付与され、プロジェクトの方向性を決定できます。
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <Card className="group relative h-full overflow-hidden border-slate-800 bg-slate-900/50 transition-colors hover:border-slate-700">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(168,85,247,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative space-y-6 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                      <LineChart className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">DEX取引</h3>
                      <p className="mt-3 text-slate-400">
                        Uniswapで自由に取引可能。流動性を提供することで追加の報酬も得られます。
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PoWTの入手方法 */}
        <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 lg:py-32">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                PoWTを獲得するには？
              </h2>
              <p className="mt-4 text-lg text-slate-400">複数の方法でPoWTトークンを入手できます</p>
            </motion.div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <Card className="group relative h-full overflow-hidden border-slate-800 bg-slate-900/50 transition-colors hover:border-slate-700">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(59,130,246,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                      <Discord className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">開発で貢献</h3>
                    <p className="mt-2 text-slate-400">
                      Discordで開発に参加して、
                      <br />
                      貢献度に応じて獲得
                    </p>
                    <ul className="mt-6 space-y-4 text-sm text-slate-400">
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-blue-500"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Discordサーバーに参加
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-blue-500"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        プロジェクトに貢献
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-blue-500"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        自動で報酬を受け取る
                      </li>
                    </ul>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"
                      asChild
                    >
                      <Link href="/connect">
                        Discordで参加する
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <Card className="group relative h-full overflow-hidden border-slate-800 bg-slate-900/50 transition-colors hover:border-slate-700">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(16,185,129,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                      <Wallet className="h-6 w-6 text-emerald-500" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">DEXで購入</h3>
                    <p className="mt-2 text-slate-400">
                      Uniswapで直接、
                      <br />
                      トークンを購入
                    </p>
                    <ul className="mt-6 space-y-4 text-sm text-slate-400">
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        ウォレットを接続
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        ETHをPoWTに交換
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-emerald-500"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        即座に取引完了
                      </li>
                    </ul>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600"
                      asChild
                    >
                      <Link href="https://app.uniswap.org" target="_blank">
                        Uniswapで購入
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <Card className="group relative h-full overflow-hidden border-slate-800 bg-slate-900/50 transition-colors hover:border-slate-700">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(168,85,247,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                      <LineChart className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">流動性提供</h3>
                    <p className="mt-2 text-slate-400">
                      流動性プールに参加して、
                      <br />
                      追加報酬を獲得
                    </p>
                    <ul className="mt-6 space-y-4 text-sm text-slate-400">
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-purple-500"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        PoWT-ETHペアを提供
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-purple-500"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        取引手数料を獲得
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-purple-500"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        追加のPoWT報酬
                      </li>
                    </ul>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600"
                      asChild
                    >
                      <Link href="/liquidity">
                        流動性を提供する
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* トークン配分（Tokenomics） */}
        <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 lg:py-32">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                トークン配分（Tokenomics）
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                持続可能なエコシステムを実現するための、透明性の高いトークン設計
              </p>
            </motion.div>
            <div className="mx-auto mt-16 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 sm:gap-8 lg:grid-cols-2"
              >
                <Card className="group relative overflow-hidden border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(59,130,246,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white">総供給量</h3>
                    <p className="mt-2 text-4xl font-bold text-blue-400">100,000,000 PoWT</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">エンジニア報酬</span>
                        <span className="font-medium text-white">50%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div className="h-full w-[50%] rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">LP報酬</span>
                        <span className="font-medium text-white">20%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div className="h-full w-[20%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">DAO運営費</span>
                        <span className="font-medium text-white">20%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div className="h-full w-[20%] rounded-full bg-gradient-to-r from-purple-500 to-purple-600" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">コミュニティ運営</span>
                        <span className="font-medium text-white">10%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div className="h-full w-[10%] rounded-full bg-gradient-to-r from-pink-500 to-pink-600" />
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="group relative overflow-hidden border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(16,185,129,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white">ベスティングスケジュール</h3>
                    <div className="mt-6 space-y-6">
                      <div>
                        <div className="flex items-center gap-2">
                          <Lock className="h-5 w-5 text-emerald-500" />
                          <h4 className="font-medium text-white">チーム・アドバイザー</h4>
                        </div>
                        <p className="mt-2 text-slate-400">
                          立ち上げから12ヶ月のロック期間後、36ヶ月かけて直線的にアンロック
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <Lock className="h-5 w-5 text-emerald-500" />
                          <h4 className="font-medium text-white">エコシステム開発</h4>
                        </div>
                        <p className="mt-2 text-slate-400">6ヶ月のロック期間後、24ヶ月かけて四半期ごとにアンロック</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <Lock className="h-5 w-5 text-emerald-500" />
                          <h4 className="font-medium text-white">流動性プール</h4>
                        </div>
                        <p className="mt-2 text-slate-400">
                          立ち上げ時に30%をロック解除、残りは24ヶ月かけて直線的にアンロック
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* コントラクト情報 */}
        <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 lg:py-32">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl"
            >
              <Card className="group relative overflow-hidden border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(59,130,246,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white">コントラクト情報</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="text-sm font-medium text-slate-400">コントラクトアドレス</div>
                      <code className="mt-1 block rounded bg-slate-800 p-2 text-sm text-slate-200">0x1234...5678</code>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-400">ネットワーク</div>
                      <div className="mt-1 text-white">Arbitrum</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-400">規格</div>
                      <div className="mt-1 text-white">ERC-20</div>
                    </div>
                    <Button
                      className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"
                      asChild
                    >
                      <Link href="https://arbiscan.io" target="_blank">
                        Arbiscanで確認する
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 lg:py-32">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                今すぐPoWTを手に入れよう！
              </h2>
              <p className="mt-4 text-lg text-slate-400">Discordサーバーに参加するだけで、すぐに始められます</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="h-12 bg-gradient-to-r from-blue-600 to-emerald-600 px-6 text-white hover:from-blue-700 hover:to-emerald-700"
                  asChild
                >
                  <Link href="/connect">
                    <Discord className="mr-2 h-5 w-5" />
                    Discordで参加する
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 border-slate-700 bg-slate-900/50 px-6 text-white backdrop-blur hover:bg-slate-900/80"
                  asChild
                >
                  <Link href="https://app.uniswap.org" target="_blank">
                    UniswapでPoWTを購入
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </TracingBeam>
    </div>
  )
}

