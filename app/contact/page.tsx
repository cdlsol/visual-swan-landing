"use client";
import { Mail, Linkedin, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const team = [
	{
		name: "Carlos Lopez",
		role: "Founder & Data Engineer",
		education: "Universidad Anahuac Mexico",
		image: "/carlos-lopez.jpg",
		linkedin: "www.linkedin.com/in/carlos-daniel-lopez-sol-73aabb259",
	},
	{
		name: "Emiliano Hernandez",
		role: "Founder & Mechatronical Engineer",
		education: "Tec de Monterrey",
		image: "/emiliano-hernandez.jpg",
		linkedin: "https://linkedin.com/in/emiliano-hernandez",
	},
];

const socials = [
	{
		icon: <Mail size={20} />,
		href: "mailto:visualsw4n@gmail.com",
		label: "Email",
		handle: "visualsw4n@gmail.com",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://linkedin.com/company/visual-swan",
		label: "LinkedIn",
		handle: "Visual Swan",
	},
];

export default function Contact() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16">
					{/* Visual Swan Logo */}
					<div className="flex justify-center mb-8">
						<div className="relative w-48 h-32">
							<Image
								src="/visual_swan_logo.jpeg"
								alt="Visual Swan Logo"
								fill
								className="object-contain"
								onError={(e) => {
									// Fallback to text if image fails to load
									e.currentTarget.style.display = 'none';
									const sibling = e.currentTarget.nextElementSibling as HTMLElement;
									if (sibling) {
										sibling.style.display = 'flex';
									}
								}}
							/>
							<div className="hidden items-center justify-center w-full h-full text-4xl font-bold text-zinc-200 bg-zinc-800 rounded-lg">
								Visual Swan
							</div>
						</div>
					</div>

					{/* Founders Section */}
					<div className="text-center mb-8">
						<h2 className="text-2xl font-bold text-zinc-100 mb-2">Fundadores</h2>
						<p className="text-zinc-400">Conoce al equipo fundador de Visual Swan</p>
					</div>

					{/* Team Section */}
					<div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:gap-16">
						{team.map((member) => (
							<Card key={member.name}>
								<div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16">
									<span
										className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
										aria-hidden="true"
									/>
									<div className="relative z-10 flex items-center justify-center w-20 h-20 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange overflow-hidden">
										<Image
											src={member.image}
											alt={member.name}
											fill
											className="object-cover"
											onError={(e) => {
												// Fallback to user icon if image fails to load
												e.currentTarget.style.display = 'none';
												const sibling = e.currentTarget.nextElementSibling as HTMLElement;
												if (sibling) {
													sibling.style.display = 'flex';
												}
											}}
										/>
										<div className="hidden items-center justify-center w-full h-full">
											<User size={32} />
										</div>
									</div>
									<div className="z-10 flex flex-col items-center text-center">
										<span className="lg:text-xl font-medium duration-150 xl:text-2xl text-zinc-200 group-hover:text-white font-display">
											{member.name}
										</span>
										<span className="mt-2 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
											{member.role}
										</span>
										<span className="mt-1 text-xs duration-1000 text-zinc-500 group-hover:text-zinc-300">
											{member.education}
										</span>
										<div className="flex gap-4 mt-4">
											<Link
												href={member.linkedin}
												target="_blank"
												className="text-zinc-400 hover:text-zinc-200"
											>
												<Linkedin size={16} />
											</Link>
										</div>
									</div>
								</div>
							</Card>
						))}
					</div>

					{/* Contact Section */}
					<div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-2 lg:gap-16">
						{socials.map((s) => (
							<Card key={s.label}>
								<Link
									href={s.href}
									target="_blank"
									className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
								>
									<span
										className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
										aria-hidden="true"
									/>
									<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
										{s.icon}
									</span>{" "}
									<div className="z-10 flex flex-col items-center">
										<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
											{s.handle}
										</span>
										<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
											{s.label}
										</span>
									</div>
								</Link>
							</Card>
						))}
					</div>
				</div>
			</div>
			
			{/* Footer */}
			<div className="container mx-auto px-4 py-8">
				<div className="text-center text-zinc-400 text-sm">
					© 2024 Visual Swan. Todos los derechos reservados.
				</div>
			</div>
		</div>
	);
}
