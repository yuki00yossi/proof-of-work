"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  Rocket,
  ThumbsUp,
  DiscIcon as Discord,
  Users,
} from "lucide-react";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function WelcomeDialog() {
  const [isOpen, setIsOpen] = useState(true);

  // useEffect(() => {
  //   // コンポーネントマウント時に自動的に表示
  //   setIsOpen(true);
  // }, []);

  return (
    <>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-[600px] border-slate-800 bg-slate-950">
            <DialogHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10"
              >
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <DialogTitle className="text-center text-xl font-semibold text-white">
                  Proof Of Work DAOは構想段階のプロジェクトです
                </DialogTitle>
                <DialogDescription className="text-center text-slate-400">
                  このウェブサイトは、プロジェクトのビジョンを共有し、賛同者を募るためのデモサイトです
                </DialogDescription>
              </motion.div>
            </DialogHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid gap-4"
            >
              <Card className="border-slate-800 bg-slate-900/50 p-4">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                    <Rocket className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-white">
                      現在の状況
                    </h4>
                    <p className="text-sm text-slate-400">
                      コアチームによる設計・開発フェーズを進めています。コミュニティの皆様からのフィードバックを歓迎します。
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-slate-800 bg-slate-900/50 p-4">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                    <ThumbsUp className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-white">
                      今後の展開
                    </h4>
                    <p className="text-sm text-slate-400">
                      2025年7月までのβ版ローンチを目指しています。その後は、発起人のStudio
                      Babeが展開するGym
                      Diary事業と連携し、実践的なテストと改善を行った後、より広範な展開を目指していきます。
                    </p>
                  </div>
                </div>
              </Card>

              {/* <Card className="border-slate-800 bg-slate-900/50 p-4">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500/10">
                    <Users className="h-4 w-4 text-purple-500" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-white">
                      あなたの力を必要としています
                    </h4>
                    <p className="text-sm text-slate-400">
                      プロジェクトへの貢献は、開発だけではありません。マーケティング、コミュニティ運営、広報活動、UI/UXデザイン、ドキュメント作成、プロジェクト管理など、様々な形で参加できます。あなたのスキルや経験を活かして、新しい開発エコシステムの構築に参加しませんか？
                    </p>
                  </div>
                </div>
              </Card> */}

              <div className="flex justify-center gap-4">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:from-blue-700 hover:to-emerald-700"
                  onClick={() => setIsOpen(false)}
                >
                  サイトを見る
                </Button>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
