import Link from "next/link"
import { DiscIcon as Discord } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/80">
      <div className="container flex h-20 items-center px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <span className="text-lg font-bold text-white">ProofOfWorkDAO</span>
          </Link>
          <NavigationMenu className="ml-2">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-slate-200 hover:text-white">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-4 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-800/50 to-slate-800 p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Discord className="h-6 w-6 text-slate-200" />
                          <div className="mb-2 mt-4 text-lg font-medium text-white">ProofOfWorkDAO</div>
                          <p className="text-sm leading-tight text-slate-400">
                            エンジニアの貢献を、透明な報酬に。Discordで開発するだけで、報酬を受け取れる。
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white"
                          href="/token"
                        >
                          <div className="text-sm font-medium leading-none text-slate-200">PoWTトークン</div>
                          <p className="mt-2 line-clamp-2 text-sm leading-snug text-slate-400">
                            PoWTの経済モデル・ユーティリティ・入手方法を解説
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white"
                          href="/rewards"
                        >
                          <div className="text-sm font-medium leading-none text-slate-200">報酬システム</div>
                          <p className="mt-2 line-clamp-2 text-sm leading-snug text-slate-400">
                            Discord貢献の評価方法・報酬支払いの流れを説明
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white"
                          href="/community"
                        >
                          <div className="text-sm font-medium leading-none text-slate-200">コミュニティ</div>
                          <p className="mt-2 line-clamp-2 text-sm leading-snug text-slate-400">
                            DAOの運営方針・投票システム・参加方法を紹介
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-slate-200 hover:text-white">
                  For Developers
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-4 p-6 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white"
                          href="/rewards"
                        >
                          <div className="text-sm font-medium leading-none text-slate-200">報酬を受け取る</div>
                          <p className="mt-2 line-clamp-2 text-sm leading-snug text-slate-400">
                            Discordアカウントを連携して、開発報酬を受け取る
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white"
                          href="/projects"
                        >
                          <div className="text-sm font-medium leading-none text-slate-200">開発プロジェクト</div>
                          <p className="mt-2 line-clamp-2 text-sm leading-snug text-slate-400">
                            現在進行中のプロジェクト一覧
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-slate-200 hover:text-white">
                  For Companies
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-4 p-6 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white"
                          href="/for-companies"
                        >
                          <div className="text-sm font-medium leading-none text-slate-200">企業向けメリット</div>
                          <p className="mt-2 line-clamp-2 text-sm leading-snug text-slate-400">
                            クラウドソーシン���との違い・開発コスト削減の魅力を紹介
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white"
                          href="/contact"
                        >
                          <div className="text-sm font-medium leading-none text-slate-200">お問い合わせ</div>
                          <p className="mt-2 line-clamp-2 text-sm leading-snug text-slate-400">
                            企業向けの相談・お問い合わせはこちら
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-slate-200 hover:text-white">
              <Discord className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 px-6 text-white hover:from-blue-700 hover:to-emerald-700"
            >
              Connect Wallet
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

