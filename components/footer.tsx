import Link from "next/link"
import { Button } from "@/components/ui/button-with-contrast"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, DiscIcon as Discord } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Michigan Roleplay Community</h2>
            <p className="text-zinc-400 mb-4">
              Experience realistic roleplay in a meticulously crafted Michigan environment. Join our community today!
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Discord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-zinc-400 hover:text-white">
                  Rules
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-zinc-400 hover:text-white">
                  Join Server
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-zinc-400 mb-4">Subscribe to our newsletter for the latest updates and events.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-zinc-800 border-zinc-700" />
              <Button className="bg-white hover:bg-zinc-200">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Michigan Roleplay Community. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-zinc-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
