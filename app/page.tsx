"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  DiscIcon as Discord,
  LineChart,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/background-beams";
import { TracingBeam } from "@/components/tracing-beam";
import { GlowingStars } from "@/components/glowing-stars";
import { WelcomeDialog } from "@/components/welcome-dialog";

export default function Page() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative flex min-h-screen flex-col">
      <WelcomeDialog />
      {/* ヒーローセクション */}
      <section
        ref={targetRef}
        className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden"
      >
        <BackgroundBeams />
        <GlowingStars />
        {/* ヒーローセクションのコンテナーのz-indexを調整 */}
        <div className="container relative z-30 mx-auto flex flex-col items-center gap-16 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center justify-center">
              <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#0EA5E9_50%,#E2E8F0_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
                  </span>
                  Web3時代の新しい開発エコシステム
                </div>
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                エンジニアの貢献を、
                <br />
                <span className="block pt-3 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  透明な報酬に。
                </span>
              </h1>
              <p className="block pt-5 mx-auto max-w-[700px] text-base text-slate-300 md:text-lg lg:text-xl">
                GitHubで協賛リポジトリの開発に参加するだけで、報酬が手に入る。
                <br className="hidden sm:inline" />
                ProofOfWorkDAOが、あなたの貢献を正当に評価します。
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="h-12 bg-gradient-to-r from-blue-600 to-emerald-600 px-6 text-white hover:from-blue-700 hover:to-emerald-700"
                asChild
              >
                <Link href="https://discord.gg/FNvEtA9n">
                  <Discord className="mr-2 h-5 w-5" />
                  Discordで参加する
                </Link>
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="h-12 border-slate-700 bg-slate-900/50 px-6 text-white backdrop-blur hover:bg-slate-900/80"
                asChild
              >
                <Link href="/whitepaper">
                  ホワイトペーパーを見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button> */}
            </div>
          </motion.div>

          {/* <motion.div style={{ opacity }} className="w-full max-w-4xl"> */}
          <motion.div className="opacity-0 w-full max-w-4xl">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/10 to-transparent" />
            <div className="mx-auto grid grid-cols-3 gap-8 px-4 py-8 text-center">
              <div>
                <div className="text-2xl font-bold text-white">100K+</div>
                <div className="text-sm text-slate-400">Lines of Code</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400">Contributors</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">1M+</div>
                <div className="text-sm text-slate-400">PoWT Distributed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <TracingBeam>
        {/* DAOの概要 */}
        <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 lg:py-32">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                ProofOfWorkDAOとは？
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                GitHubの貢献をスマートコントラクトで評価し、PoWTトークンで報酬を支払う、
                <br className="hidden sm:inline" />
                新しい開発エコシステムです。
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
                      <h3 className="text-lg font-semibold text-white">
                        GitHubで貢献
                      </h3>
                      <p className="mt-3 text-slate-400">
                        GitHubの対象リポジトリ開発に参加するだけ。
                        あなたの貢献が評価対象になります。
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
                      <LineChart className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        スマートコントラクトが評価
                      </h3>
                      <p className="mt-3 text-slate-400">
                        貢献度を自動で計算。
                        透明性の高い報酬システムを実現します。
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
                      <Users className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        PoWTで即時報酬
                      </h3>
                      <p className="mt-3 text-slate-400">
                        評価が確定すると即座に報酬を受け取れます。
                        手数料は一切かかりません。
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 参加方法 */}
        <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 lg:py-32">
          <div className="container relative px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                参加方法
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                あなたに合った方法でProofOfWorkDAOに参加できます
              </p>
            </motion.div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
              {/* エンジニア向け */}
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
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      エンジニア
                    </h3>
                    <p className="mt-2 text-slate-400">
                      GitHubで開発して、
                      <br />
                      PoWTトークンを獲得
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
                      <Link href="https://discord.gg/FNvEtA9n">
                        Discordで参加する
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>

              {/* 企業向け */}
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
                      <Users className="h-6 w-6 text-emerald-500" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      企業
                    </h3>
                    <p className="mt-2 text-slate-400">
                      即座に世界中の
                      <br />
                      優秀なエンジニアと協業
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
                        契約不要でスタート
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
                        GitHub上で開発を管理
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
                        PoWTで直接報酬を支払い
                      </li>
                    </ul>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600"
                      asChild
                    >
                      <Link href="/for-companies">
                        詳しく見る
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>

              {/* 投資家向け */}
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
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      投資家
                    </h3>
                    <p className="mt-2 text-slate-400">
                      PoWTを購入して、
                      <br />
                      DAOの成長に参加
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
                        UniswapでPoWTを購入
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
                        ガバナンスに参加
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
                        LP報酬を獲得
                      </li>
                    </ul>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600"
                      asChild
                    >
                      <Link href="https://discord.gg/FNvEtA9n">
                        Discordで参加する
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
          <div className="text-white/80 underline mt-4 text-center">
            <Link href={`/community`} className="hover:text-white/90">
              コミュニティの詳細を確認する
              <ArrowRight className="inline ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* PoWTトークンの価値 */}
        <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 lg:py-32">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                PoWTトークンの価値
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                ProofOfWorkDAOの価値を体現するトークン
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
                      <svg
                        className="h-6 w-6 text-blue-500"
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
                        <path d="M12 2v20" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        エンジニア報酬
                      </h3>
                      <p className="mt-3 text-slate-400">
                        GitHub貢献に応じて獲得できます。貢献度が高いほど、より多くのトークンを獲得できます。
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
                      <svg
                        className="h-6 w-6 text-emerald-500"
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
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        ガバナンス投票
                      </h3>
                      <p className="mt-3 text-slate-400">
                        DAOの意思決定に参加できます。保有量に応じて投票権が付与されます。
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
                      <svg
                        className="h-6 w-6 text-purple-500"
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
                        <path d="m2 16 20 6-6-20L2 16Z" />
                        <path d="M15.71 15.71 8.29 8.29" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        DEX取引
                      </h3>
                      <p className="mt-3 text-slate-400">
                        Uniswapで自由に取引可能。流動性を提供することで報酬も得られます。
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
          <div className="text-white/80 underline mt-4 text-center">
            <Link href={`/token`} className="hover:text-white/90">
              PoWTの詳細を確認する
              <ArrowRight className="inline ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* 収益モデル */}
        <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 lg:py-32">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                収益モデル
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                持続可能なエコシステムを実現する収益構造
              </p>
            </motion.div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2">
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
                      <svg
                        className="h-6 w-6 text-blue-500"
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
                        <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7" />
                        <path d="M15 7h6v6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        取引手数料
                      </h3>
                      <p className="mt-3 text-slate-400">
                        DEXでの取引手数料の一部がDAOの収益となります。この収益は主にエンジニアへの報酬に充てられます。
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
                      <svg
                        className="h-6 w-6 text-emerald-500"
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
                        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        企業からの支援
                      </h3>
                      <p className="mt-3 text-slate-400">
                        企業がDAOを通じて開発を依頼する際の手数料が収益となります。これにより、エコシステムの持続可能性を確保します。
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
          <div className="text-white/80 underline mt-4 text-center">
            <Link href={`/rewards`} className="hover:text-white/90">
              収益モデルの詳細を確認する
              <ArrowRight className="inline ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* 従来のクラウドソーシングとの比較 */}
        <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 lg:py-32">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                従来の発注・クラウドソーシングとの比較
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                ProofOfWorkDAOが実現する、新しい開発の形
              </p>
            </motion.div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2">
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
                      <svg
                        className="h-6 w-6 text-blue-500"
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        従来のクラウドソーシング
                      </h3>
                      <ul className="mt-3 space-y-2 text-slate-400">
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-4 w-4 text-red-500"
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
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                          高額な手数料
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-4 w-4 text-red-500"
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
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                          複雑な契約プロセス
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-4 w-4 text-red-500"
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
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                          不透明な評価基準
                        </li>
                      </ul>
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
                      <svg
                        className="h-6 w-6 text-emerald-500"
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
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        ProofOfWorkDAO
                      </h3>
                      <ul className="mt-3 space-y-2 text-slate-400">
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
                          開発コストの最適化
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
                          契約不要でスタート
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
                          透明な評価システム
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 lg:py-32">
          <div className="container px-4 mx-auto">
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
              <p className="mt-4 text-lg text-slate-400">
                ProofOfWorkDAOに関する疑問にお答えします
              </p>
            </motion.div>
            <div className="mx-auto mt-16 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <Card className="group relative overflow-hidden border-slate-800 bg-slate-900/50 transition-colors hover:border-slate-700">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(59,130,246,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative p-6">
                    <h3 className="text-lg font-semibold text-white">
                      どんな開発案件がありますか？
                    </h3>
                    <p className="mt-3 text-slate-400">
                      Web3プロジェクトを中心に、フロントエンド、バックエンド、スマートコントラクトなど、幅広い開発案件があります。
                      案件の詳細は、Discordで確認できます。
                    </p>
                  </div>
                </Card>
                <Card className="group relative overflow-hidden border-slate-800 bg-slate-900/50 transition-colors hover:border-slate-700">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(59,130,246,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative p-6">
                    <h3 className="text-lg font-semibold text-white">
                      報酬はどのように決まりますか？
                    </h3>
                    <p className="mt-3 text-slate-400">
                      プルリクエストの規模、複雑さ、影響度などを総合的に評価し、スマートコントラクトが自動で報酬を計算します。
                      評価基準は完全に透明で、コミュニティによって決定されます。
                    </p>
                  </div>
                </Card>
                <Card className="group relative overflow-hidden border-slate-800 bg-slate-900/50 transition-colors hover:border-slate-700">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(59,130,246,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative p-6">
                    <h3 className="text-lg font-semibold text-white">
                      企業として参加するメリットは？
                    </h3>
                    <p className="mt-3 text-slate-400">
                      安価な手数料で、世界中の優秀なエンジニアと協業でき、契約や支払いの手続きも最小限です。
                      また、Web3コミュニティとの接点を持つことで、最新技術への理解も深められると同時に、企業ブランディングの向上が見込まれます。
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 lg:py-32">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                新しい開発の形へ、今すぐ参加
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                Discordサーバーに参加するだけで、すぐに始められます
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="h-12 bg-gradient-to-r from-blue-600 to-emerald-600 px-6 text-white hover:from-blue-700 hover:to-emerald-700"
                  asChild
                >
                  <Link href="https://discord.gg/FNvEtA9n">
                    <Discord className="mr-2 h-5 w-5" />
                    Discordで参加する
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </TracingBeam>
    </div>
  );
}
