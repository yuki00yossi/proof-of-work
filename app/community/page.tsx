"use client"

import { motion } from "framer-motion"
import { ArrowRight, DiscIcon as Discord, Github, MessageSquare, Twitter, Users, Vote } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BackgroundBeams } from "@/components/background-beams"
import { TracingBeam } from "@/components/tracing-beam"

export default function CommunityPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* ヒーローセクション */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden">
        <BackgroundBeams />
        <div className="container relative z-10 mx-auto flex flex-col items-center gap-8 px-4 text-center">
          {/* DAOアイコン */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-32 w-32 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 p-1"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
              <Users className="h-16 w-16 text-white" />
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
                  Web3時代の新しいガバナンス
                </div>
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              ProofOfWorkDAOの未来を、
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                あなたの投票で決める！
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-base text-slate-300 md:text-lg lg:text-xl">
              ProofOfWorkDAOは、完全に分散化された開発者主導のエコシステムです。
              <br className="hidden sm:inline" />
              PoWTトークンを保有することで、DAOの重要な決定に投票できます。
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
                Discordに参加する
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-slate-700 bg-slate-900/50 px-6 text-white backdrop-blur hover:bg-slate-900/80"
              asChild
            >
              <Link href="https://snapshot.org" target="_blank">
                最新の投票を確認する
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
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400">Active Voters</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-sm text-slate-400">Proposals</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">1M+</div>
                <div className="text-sm text-slate-400">PoWT Staked</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <TracingBeam>
        {/* DAOのガバナンスとは？ */}
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
                ProofOfWorkDAOの運営は、PoWT保有者によって決まる
              </h2>
              <p className="mt-4 text-lg text-slate-400">DAOの重要な決定は、すべてコミュニティの投票で決定されます</p>
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
                      <Vote className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">分散型意思決定</h3>
                      <p className="mt-3 text-slate-400">
                        PoWTを持つ全員が投票に参加でき、DAOの意思決定に関わることができます。
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
                      <Github className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">透明性のある運営</h3>
                      <p className="mt-3 text-slate-400">
                        提案と投票結果はすべて公開され、スマートコントラクトで自動実行されます。
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
                      <MessageSquare className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">継続的な改善</h3>
                      <p className="mt-3 text-slate-400">
                        コミュニティの意見を反映し、プロジェクトを継続的に進化させていきます。
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PoWTを使った意思決定の流れ */}
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
                PoWTを使って、DAOの未来を決めよう！
              </h2>
              <p className="mt-4 text-lg text-slate-400">投票プロセスは完全に透明で、誰でも参加できます</p>
            </motion.div>
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="relative">
                <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-emerald-500 to-purple-500" />
                <div className="space-y-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative"
                  >
                    <div className="flex gap-6">
                      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-900 shadow-md">
                        <MessageSquare className="h-8 w-8 text-blue-500" />
                        <div className="absolute -inset-1 animate-pulse rounded-full bg-blue-500/20 blur-sm" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">提案が投稿される</h3>
                        <p className="mt-2 text-slate-400">
                          誰でも新しい提案を投稿できます。
                          <br />
                          プロジェクトの方向性や新機能の提案など、幅広いトピックを扱います。
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="flex gap-6">
                      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-900 shadow-md">
                        <Discord className="h-8 w-8 text-emerald-500" />
                        <div className="absolute -inset-1 animate-pulse rounded-full bg-emerald-500/20 blur-sm" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">コミュニティで議論</h3>
                        <p className="mt-2 text-slate-400">
                          Discord & フォーラムで提案について議論します。
                          <br />
                          コミュニティの意見を集め、提案を改善していきます。
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative"
                  >
                    <div className="flex gap-6">
                      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-900 shadow-md">
                        <Vote className="h-8 w-8 text-purple-500" />
                        <div className="absolute -inset-1 animate-pulse rounded-full bg-purple-500/20 blur-sm" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Snapshotで投票</h3>
                        <p className="mt-2 text-slate-400">
                          PoWT保有者が投票権を持ち、Snapshot上で投票を行います。
                          <br />
                          保有量に応じて投票の重みが変わります。
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative"
                  >
                    <div className="flex gap-6">
                      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-900 shadow-md">
                        <Github className="h-8 w-8 text-pink-500" />
                        <div className="absolute -inset-1 animate-pulse rounded-full bg-pink-500/20 blur-sm" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">決定事項が実行される</h3>
                        <p className="mt-2 text-slate-400">
                          投票で承認された提案は、スマートコントラクトによって自動実行されます。
                          <br />
                          すべての実行履歴は透明に記録されます。
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* コミュニティ活動 */}
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
                ProofOfWorkDAOのコミュニティに参加しよう！
              </h2>
              <p className="mt-4 text-lg text-slate-400">さまざまな方法でDAOの活動に参加できます</p>
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
                    <h3 className="mt-4 text-lg font-semibold text-white">Discordで議論</h3>
                    <p className="mt-2 text-slate-400">
                      エンジニア・投資家・企業が
                      <br />
                      活発に情報交換
                    </p>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"
                      asChild
                    >
                      <Link href="/connect">
                        Discordに参加する
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
                      <Twitter className="h-6 w-6 text-emerald-500" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">最新情報をチェック</h3>
                    <p className="mt-2 text-slate-400">
                      プロジェクトの進捗や
                      <br />
                      アップデートを共有
                    </p>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600"
                      asChild
                    >
                      <Link href="https://twitter.com" target="_blank">
                        Twitterをフォロー
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
                      <MessageSquare className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">フォーラムで提案</h3>
                    <p className="mt-2 text-slate-400">
                      新機能・方針に関する
                      <br />
                      意見交換の場
                    </p>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600"
                      asChild
                    >
                      <Link href="/forum">
                        フォーラムを見る
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 参加方法 */}
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
                あなたに合った関わり方を見つけよう
              </h2>
              <p className="mt-4 text-lg text-slate-400">それぞれの立場に合わせて、DAOに参加できます</p>
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
                      <Github className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">エンジニア</h3>
                    <p className="mt-2 text-slate-400">
                      GitHubで開発し、
                      <br />
                      報酬を得る
                    </p>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"
                      asChild
                    >
                      <Link href="/rewards">
                        GitHubで開発する
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
                      <Vote className="h-6 w-6 text-emerald-500" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">投資家</h3>
                    <p className="mt-2 text-slate-400">
                      PoWTを保有し、
                      <br />
                      投票に参加
                    </p>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600"
                      asChild
                    >
                      <Link href="/token">
                        UniswapでPoWTを購入
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
                      <Users className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">企業</h3>
                    <p className="mt-2 text-slate-400">
                      開発リソースを活用し、
                      <br />
                      プロジェクトを推進
                    </p>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600"
                      asChild
                    >
                      <Link href="/for-companies">
                        企業向けプランを見る
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
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
                よくある質問
              </h2>
              <p className="mt-4 text-lg text-slate-400">ガバナンスやコミュニティ参加に関する疑問にお答えします</p>
            </motion.div>
            <div className="mx-auto mt-16 max-w-3xl">
              <Card className="border-slate-800 bg-slate-900/50">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-slate-800">
                    <AccordionTrigger className="text-white hover:text-white">
                      DAOの意思決定には誰でも参加できますか？
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400">
                      PoWTを保有していれば、誰でも投票に参加できます。保有量に応じて投票の重みが変わります。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-slate-800">
                    <AccordionTrigger className="text-white hover:text-white">
                      投票はどこで行われますか？
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400">
                      Snapshot上で実施され、すべての投票履歴は透明に管理されます。投票期間は通常7日間で、その間であればいつでも投票できます。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-slate-800">
                    <AccordionTrigger className="text-white hover:text-white">
                      提案はどのように作成できますか？
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400">
                      一定量のPoWTを保有していれば、誰でも提案を作成できます。提案前にDiscordやフォーラムでコミュニティと議論することをお勧めします。
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </div>
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
                ProofOfWorkDAOの未来を、あなたの手で！
              </h2>
              <p className="mt-4 text-lg text-slate-400">コミュニティに参加して、DAOの成長に貢献しましょう</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="h-12 bg-gradient-to-r from-blue-600 to-emerald-600 px-6 text-white hover:from-blue-700 hover:to-emerald-700"
                  asChild
                >
                  <Link href="/connect">
                    <Discord className="mr-2 h-5 w-5" />
                    Discordに参加する
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 border-slate-700 bg-slate-900/50 px-6 text-white backdrop-blur hover:bg-slate-900/80"
                  asChild
                >
                  <Link href="https://snapshot.org" target="_blank">
                    最新の投票を確認する
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

