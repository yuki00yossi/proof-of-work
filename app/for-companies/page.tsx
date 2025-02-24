"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Clock,
  Code2,
  DollarSign,
  FileCheck,
  Github,
  LineChart,
  Rocket,
  Shield,
  Wallet,
  XCircle,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BackgroundBeams } from "@/components/background-beams"
import { TracingBeam } from "@/components/tracing-beam"

export default function CompaniesPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* ヒーローセクション */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden">
        <BackgroundBeams />
        <div className="container relative z-10 mx-auto flex flex-col items-center gap-8 px-4 text-center">
          {/* 企業アイコン */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-32 w-32 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 p-1"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
              <Building2 className="h-16 w-16 text-white" />
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
                  Web3時代の新しい開発支援
                </div>
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              最も効率的な
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                エンジニア採用 & 開発支援モデル
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-base text-slate-300 md:text-lg lg:text-xl">
              契約不要・手数料ゼロで、世界中の開発者と直接つながる。
              <br className="hidden sm:inline" />
              ProofOfWorkDAOが、あなたの開発プロジェクトを加速します。
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
              <Link href="/contact">
                <Building2 className="mr-2 h-5 w-5" />
                導入について相談する
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-slate-700 bg-slate-900/50 px-6 text-white backdrop-blur hover:bg-slate-900/80"
              asChild
            >
              <Link href="/whitepaper">
                企業向け資料をダウンロード
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
                <div className="text-sm text-slate-400">導入企業</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-sm text-slate-400">開発プロジェクト</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">30%</div>
                <div className="text-sm text-slate-400">コスト削減</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <TracingBeam>
        {/* 企業が抱える課題 */}
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
                従来の開発手法には、こんな課題があります
              </h2>
              <p className="mt-4 text-lg text-slate-400">クラウドソーシングや従来の外注開発が抱える問題点</p>
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
                      <DollarSign className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">高額な開発コスト</h3>
                      <p className="mt-3 text-slate-400">
                        フリーランスプラットフォームの手数料（10〜20%）が発生し、中間マージンで開発コストが膨らみます。
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
                      <Clock className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">開発スピードの遅さ</h3>
                      <p className="mt-3 text-slate-400">
                        案件ごとに契約・交渉が必要で、開発着手までに時間がかかり、プロジェクトが遅延するリスクがあります。
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
                      <Shield className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">エンジニアのスキルが不透明</h3>
                      <p className="mt-3 text-slate-400">
                        ポートフォリオの信頼性が不明で、適切な人材を選びにくい状況が発生します。
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
                      <FileCheck className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">契約や支払いの手間</h3>
                      <p className="mt-3 text-slate-400">都度の契約処理が面倒で、支払い管理も煩雑になりがちです。</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ProofOfWorkDAOの解決策 */}
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
                ProofOfWorkDAOなら、開発の手間を大幅に削減！
              </h2>
              <p className="mt-4 text-lg text-slate-400">企業向けの3つの大きなメリット</p>
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
                      <Wallet className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">コスト削減</h3>
                      <p className="mt-3 text-slate-400">
                        手数料ゼロ & 無駄な中間コストなし。
                        <br />
                        開発コストを最大30%削減できます。
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
                      <Rocket className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">開発スピードの向上</h3>
                      <p className="mt-3 text-slate-400">
                        契約不要で、すぐに開発がスタート。
                        <br />
                        プロジェクトの進行が最大2倍に。
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
                      <Github className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">優秀なエンジニアと直接つながる</h3>
                      <p className="mt-3 text-slate-400">
                        GitHub貢献が可視化され、スキルが明確。
                        <br />
                        実績のある開発者と協業できます。
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* クラウドソーシングとの比較 */}
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
                従来のクラウドソーシングと何が違うの？
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                ProofOfWorkDAOは、従来の開発手法とは一線を画す新しいアプローチです
              </p>
            </motion.div>
            <div className="mx-auto mt-16 max-w-5xl">
              <Card className="border-slate-800 bg-slate-900/50">
                <div className="grid divide-y divide-slate-800 lg:divide-y-0 lg:divide-x">
                  <div className="grid grid-cols-1 divide-y divide-slate-800 lg:grid-cols-2">
                    <div className="p-6 lg:p-8">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                          <CheckCircle className="h-6 w-6 text-emerald-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">ProofOfWorkDAO</h3>
                      </div>
                      <div className="mt-8 space-y-6">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 shrink-0 text-emerald-500" />
                          <div>
                            <div className="font-medium text-white">手数料ゼロ</div>
                            <div className="text-sm text-slate-400">中間マージンなしで直接取引</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 shrink-0 text-emerald-500" />
                          <div>
                            <div className="font-medium text-white">契約不要</div>
                            <div className="text-sm text-slate-400">GitHub連携のみでスタート</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 shrink-0 text-emerald-500" />
                          <div>
                            <div className="font-medium text-white">スキル評価が透明</div>
                            <div className="text-sm text-slate-400">GitHub実績で可視化</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 shrink-0 text-emerald-500" />
                          <div>
                            <div className="font-medium text-white">即日開発開始</div>
                            <div className="text-sm text-slate-400">手続き不要ですぐスタート</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
                          <XCircle className="h-6 w-6 text-red-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">従来のクラウドソーシング</h3>
                      </div>
                      <div className="mt-8 space-y-6">
                        <div className="flex items-start gap-3">
                          <XCircle className="h-6 w-6 shrink-0 text-red-500" />
                          <div>
                            <div className="font-medium text-white">10〜20%の手数料</div>
                            <div className="text-sm text-slate-400">プラットフォーム利用料が発生</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <XCircle className="h-6 w-6 shrink-0 text-red-500" />
                          <div>
                            <div className="font-medium text-white">都度の契約が必要</div>
                            <div className="text-sm text-slate-400">契約手続きに時間がかかる</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <XCircle className="h-6 w-6 shrink-0 text-red-500" />
                          <div>
                            <div className="font-medium text-white">スキル評価が不透明</div>
                            <div className="text-sm text-slate-400">自己申告のポートフォリオ</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <XCircle className="h-6 w-6 shrink-0 text-red-500" />
                          <div>
                            <div className="font-medium text-white">開発開始まで時間がかかる</div>
                            <div className="text-sm text-slate-400">数日〜数週間の準備期間</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* 企業の利用方法 */}
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
                ProofOfWorkDAOの導入方法
              </h2>
              <p className="mt-4 text-lg text-slate-400">3つの活用方法から、ニーズに合わせて選択できます</p>
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
                      <Code2 className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">オープンソース開発</h3>
                    <p className="mt-2 text-slate-400">
                      自社プロダクトにOSSを活用し、
                      <br />
                      開発コストを削減
                    </p>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"
                      asChild
                    >
                      <Link href="/contact">
                        詳しく相談する
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
                    <h3 className="mt-4 text-lg font-semibold text-white">PoWTでの報酬支払い</h3>
                    <p className="mt-2 text-slate-400">
                      GitHub経由で開発者に
                      <br />
                      直接報酬を支払い
                    </p>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600"
                      asChild
                    >
                      <Link href="/token">
                        報酬システムを見る
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
                    <h3 className="mt-4 text-lg font-semibold text-white">月額プラン</h3>
                    <p className="mt-2 text-slate-400">
                      長期的な開発体制を
                      <br />
                      安定的に構築
                    </p>
                    <Button
                      className="mt-8 w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600"
                      asChild
                    >
                      <Link href="/pricing">
                        料金プランを見る
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
              <p className="mt-4 text-lg text-slate-400">企業からよくいただく質問にお答えします</p>
            </motion.div>
            <div className="mx-auto mt-16 max-w-3xl">
              <Card className="border-slate-800 bg-slate-900/50">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-slate-800">
                    <AccordionTrigger className="text-white hover:text-white">
                      開発者との契約は必要ですか？
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400">
                      必要ありません。GitHubでの貢献ベースで報酬が支払われ、すべてスマートコントラクトで自動的に処理されます。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-slate-800">
                    <AccordionTrigger className="text-white hover:text-white">
                      プロジェクト管理はどのように行われますか？
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400">
                      GitHubのIssue管理システムを活用し、透明性のある進行管理が可能です。必要に応じて、専任のプロジェクトマネージャーのサポートも提供しています。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-slate-800">
                    <AccordionTrigger className="text-white hover:text-white">
                      開発費用の支払い方法は？
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400">
                      PoWTトークンまたは法定通貨での支払いに対応しています。月額プランの場合は、請求書払いも可能です。
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
                ProofOfWorkDAOで、開発を加速させましょう！
              </h2>
              <p className="mt-4 text-lg text-slate-400">まずは気軽にご相談ください</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="h-12 bg-gradient-to-r from-blue-600 to-emerald-600 px-6 text-white hover:from-blue-700 hover:to-emerald-700"
                  asChild
                >
                  <Link href="/contact">
                    <Building2 className="mr-2 h-5 w-5" />
                    導入について相談する
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 border-slate-700 bg-slate-900/50 px-6 text-white backdrop-blur hover:bg-slate-900/80"
                  asChild
                >
                  <Link href="/whitepaper">
                    企業向け資料をダウンロード
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

