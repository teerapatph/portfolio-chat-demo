<div class="p-4 sm:p-8 font-sans bg-transparent min-h-full pt-20 relative overflow-hidden flex flex-col items-center">
	
	

	<div class="max-w-5xl w-full z-10 space-y-8">
		<div class="flex items-center justify-between mb-8">
			<h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Admin Dashboard</h1>
		</div>
		
		<!-- Stats Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
			<div class="p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-l-4 border-primary shadow-lg rounded-2xl hover:shadow-xl transition-all">
				<div class="text-3xl font-bold text-gray-800 dark:text-gray-100">12,402</div>
				<div class="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wider">Total Users</div>
			</div>
			<div class="p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-l-4 border-secondary shadow-lg rounded-2xl hover:shadow-xl transition-all">
				<div class="text-3xl font-bold text-gray-800 dark:text-gray-100">89,301</div>
				<div class="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wider">Messages Sent</div>
			</div>
			<div class="p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-l-4 border-accent shadow-lg rounded-2xl hover:shadow-xl transition-all">
				<div class="text-3xl font-bold text-gray-800 dark:text-gray-100">99.9%</div>
				<div class="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wider">System Uptime</div>
			</div>
		</div>

		<!-- Charts Area Mock -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
			<div class="p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg rounded-2xl border border-gray-100 dark:border-gray-800">
				<h2 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">Activity Overview</h2>
				<div class="h-48 w-full flex items-end justify-between gap-3 border-b border-gray-200 dark:border-gray-700 pb-2">
					<div class="w-full bg-primary/20 rounded-t-md h-1/4 hover:bg-primary/40 transition-all cursor-pointer"></div>
					<div class="w-full bg-primary/40 rounded-t-md h-2/4 hover:bg-primary/60 transition-all cursor-pointer"></div>
					<div class="w-full bg-primary/30 rounded-t-md h-1/3 hover:bg-primary/50 transition-all cursor-pointer"></div>
					<div class="w-full bg-primary/60 rounded-t-md h-3/4 hover:bg-primary/80 transition-all cursor-pointer"></div>
					<div class="w-full bg-primary/90 rounded-t-md h-full hover:bg-primary transition-all cursor-pointer"></div>
					<div class="w-full bg-primary/70 rounded-t-md h-4/5 hover:bg-primary/90 transition-all cursor-pointer"></div>
					<div class="w-full bg-primary/50 rounded-t-md h-1/2 hover:bg-primary/70 transition-all cursor-pointer"></div>
				</div>
				<div class="flex justify-between text-xs font-medium text-gray-400 mt-3">
					<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
				</div>
			</div>
			
			<div class="p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg rounded-2xl border border-gray-100 dark:border-gray-800">
				<h2 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">Recent Users</h2>
				<div class="space-y-4">
					{#each [1,2,3] as i}
						<div class="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
							<div class="flex items-center gap-4">
								<div class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-lg">U{i}</div>
								<div>
									<div class="text-md font-bold text-gray-800 dark:text-gray-200">Demo User {i}</div>
									<div class="text-xs font-medium text-gray-500">Active 2 mins ago</div>
								</div>
							</div>
							<div class="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-wider">Pro</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

