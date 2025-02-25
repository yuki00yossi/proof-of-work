"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Github,
  GitPullRequest,
  MessageSquare,
  Coins,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BackgroundBeams } from "@/components/background-beams";
import { TracingBeam } from "@/components/tracing-beam";

export default function RewardsPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* ヒーローセクション */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden">
        <BackgroundBeams />
        <div className="container relative z-10 mx-auto flex flex-col items-center gap-8 px-4 text-center">
          {/* GitHubアイコン */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-32 w-32 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 p-1"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
              <Github className="h-16 w-16 text-white" />
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
                  Web3時代の新しい開発報酬
                </div>
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              GitHubで開発するだけで、
              <br />
              <span className="block mt-3 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                PoWT報酬がもらえる！
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-base text-slate-300 md:text-lg lg:text-xl">
              ProofOfWorkDAOでは、エンジニアの貢献を透明に評価し、
              <br className="hidden sm:inline" />
              スマートコントラクトを通じてPoWTトークンを自動支払いします。
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
                <Github className="mr-2 h-5 w-5" />
                GitHubを連携する
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-slate-700 bg-slate-900/50 px-6 text-white backdrop-blur hover:bg-slate-900/80"
              asChild
            >
              {/* <Link href="/guide">
                貢献ガイドを見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link> */}
            </Button>
          </motion.div>

          {/* 統計情報 */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute inset-x-0 bottom-0 z-20 mx-auto w-full max-w-4xl"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/10 to-transparent" />
            <div className="mx-auto grid max-w-sm grid-cols-3 gap-8 px-4 py-8 text-center md:max-w-2xl md:grid-cols-3 lg:max-w-4xl">
              <div>
                <div className="text-2xl font-bold text-white">1M+</div>
                <div className="text-sm text-slate-400">PoWT Distributed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400">
                  Active Contributors
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-sm text-slate-400">PRs Merged</div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>

      <TracingBeam>
        {/* PoWT報酬の仕組み */}
        <section className="relative w-full overflow-hidden bg-slate-950 py-16 sm:py-24 lg:py-32">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                貢献すればするほど、PoWTがもらえる！
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                エンジニアの貢献は、以下のスコアリングシステムで評価されます
              </p>
            </motion.div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-4">
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
                      <Code2 className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        PRの変更行数
                      </h3>
                      <p className="mt-2 text-3xl font-bold text-blue-400">
                        50%
                      </p>
                      <p className="mt-3 text-sm text-slate-400">
                        変更されたコード行数に応じて報酬が計算されます
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
                      <GitPullRequest className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        コミット数
                      </h3>
                      <p className="mt-2 text-3xl font-bold text-emerald-400">
                        20%
                      </p>
                      <p className="mt-3 text-sm text-slate-400">
                        継続的な貢献を評価します
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
                      <CheckCircle className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Issue解決
                      </h3>
                      <p className="mt-2 text-3xl font-bold text-purple-400">
                        20%
                      </p>
                      <p className="mt-3 text-sm text-slate-400">
                        新機能開発やバグ修正の対応を評価
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <Card className="group relative h-full overflow-hidden border-slate-800 bg-slate-900/50 transition-colors hover:border-slate-700">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(236,72,153,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative space-y-6 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/10">
                      <MessageSquare className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        コードレビュー
                      </h3>
                      <p className="mt-2 text-3xl font-bold text-pink-400">
                        10%
                      </p>
                      <p className="mt-3 text-sm text-slate-400">
                        他の開発者へのレビュー貢献を評価
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 報酬の受け取りフロー */}
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
                報酬は自動で支払われる！
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                スマートコントラクトが自動で評価・支払いを行います
              </p>
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
                        <Github className="h-8 w-8 text-blue-500" />
                        <div className="absolute -inset-1 animate-pulse rounded-full bg-blue-500/20 blur-sm" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          GitHubで開発
                        </h3>
                        <p className="mt-2 text-slate-400">
                          プロジェクトを選び、コードを書いてPRを提出します。
                          <br />
                          他の開発者のPRをレビューすることもできます。
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
                        <GitPullRequest className="h-8 w-8 text-emerald-500" />
                        <div className="absolute -inset-1 animate-pulse rounded-full bg-emerald-500/20 blur-sm" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          PRがマージされる
                        </h3>
                        <p className="mt-2 text-slate-400">
                          コードレビューを通過し、PRがマージされると報酬の対象になります。
                          <br />
                          レビューアーもレビュー報酬を受け取れます。
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
                        <Code2 className="h-8 w-8 text-purple-500" />
                        <div className="absolute -inset-1 animate-pulse rounded-full bg-purple-500/20 blur-sm" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          スコアを計算
                        </h3>
                        <p className="mt-2 text-slate-400">
                          スマートコントラクトが、変更行数・コミット数・Issue解決・レビューを評価。
                          <br />
                          透明な基準で貢献スコアを計算します。
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
                        <Coins className="h-8 w-8 text-pink-500" />
                        <div className="absolute -inset-1 animate-pulse rounded-full bg-pink-500/20 blur-sm" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          PoWTを受け取る
                        </h3>
                        <p className="mt-2 text-slate-400">
                          計算されたスコアに応じて、PoWTトークンが自動で送金されます。
                          <br />
                          24時間以内に、あなたのウォレットに届きます。
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub連携 & 貢献方法 */}
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
                GitHub連携をして、開発に参加しよう！
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                3ステップで簡単に開発に参加できます
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
                  <div className="relative p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                      <Github className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      GitHubを連携
                    </h3>
                    <p className="mt-2 text-slate-400">
                      GitHubアカウントを連携して、
                      <br />
                      開発に参加する準備をします
                    </p>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"
                      asChild
                    >
                      <Link href="/connect">
                        GitHubを連携する
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
                      <Code2 className="h-6 w-6 text-emerald-500" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      プロジェクトを選択
                    </h3>
                    <p className="mt-2 text-slate-400">
                      興味のあるプロジェクトを選び、
                      <br />
                      Issueを確認します
                    </p>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600"
                      asChild
                    >
                      <Link href="/projects">
                        プロジェクトを探す
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
                      <GitPullRequest className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      PRを作成
                    </h3>
                    <p className="mt-2 text-slate-400">
                      コードを書いてPRを作成し、
                      <br />
                      開発に貢献します
                    </p>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600"
                      asChild
                    >
                      <Link href="/guide">
                        貢献ガイドを見る
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
                報酬に関する疑問にお答えします
              </p>
            </motion.div>
            <div className="mx-auto mt-16 max-w-3xl">
              <Card className="border-slate-800 bg-slate-900/50 px-3">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-slate-800">
                    <AccordionTrigger className="text-white hover:text-white">
                      報酬の支払いはどのタイミングで行われますか？
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400">
                      PRがマージされたタイミングで、スマートコントラクトが自動計算し、24時間以内に支払われます。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-slate-800">
                    <AccordionTrigger className="text-white hover:text-white">
                      PoWTトークンの受け取りにはウォレットが必要ですか？
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400">
                      はい、PoWTはArbitrumネットワーク上のトークンなので、MetaMaskなどのウォレットが必要です。GitHubアカウントの連携時にウォレットの設定もサポートします。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-slate-800">
                    <AccordionTrigger className="text-white hover:text-white">
                      コードレビューやIssue解決も報酬になりますか？
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400">
                      はい、PRの変更行数だけでなく、Issue解決やコードレビューの承認も報酬対象です。コミュニティへの貢献を総合的に評価します。
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
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
                さあ、開発に参加してPoWTを獲得しよう！
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                GitHubアカウントを連携するだけで、すぐに始められます
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="h-12 bg-gradient-to-r from-blue-600 to-emerald-600 px-6 text-white hover:from-blue-700 hover:to-emerald-700"
                  asChild
                >
                  <Link href="/connect">
                    <Github className="mr-2 h-5 w-5" />
                    GitHubを連携する
                  </Link>
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="h-12 border-slate-700 bg-slate-900/50 px-6 text-white backdrop-blur hover:bg-slate-900/80"
                  asChild
                >
                  <Link href="/projects">
                    プロジェクトを探す
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button> */}
              </div>
            </motion.div>
          </div>
        </section>
      </TracingBeam>
    </div>
  );
}
