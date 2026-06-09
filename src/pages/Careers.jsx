import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Bot, Code, Smartphone, Briefcase, TrendingUp, Users, MapPin, Clock, IndianRupee, ArrowRight, Frown } from 'lucide-react';

const jobsData = [
  {
    id: 1,
    title: 'AI Agents Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    salary: '₹80k - ₹150k / month',
    icon: Bot
  },
  {
    id: 2,
    title: 'Website Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Hybrid',
    salary: '₹50k - ₹120k / month',
    icon: Code
  },
  {
    id: 3,
    title: 'Mobile App Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    salary: '₹60k - ₹130k / month',
    icon: Smartphone
  },
  {
    id: 4,
    title: 'Business Development',
    department: 'Sales',
    type: 'Full-time',
    location: 'Onsite',
    salary: '₹40k - ₹90k / month',
    icon: Briefcase
  },
  {
    id: 5,
    title: 'Sales Executive',
    department: 'Sales',
    type: 'Full-time',
    location: 'Onsite',
    salary: '₹30k - ₹70k / month',
    icon: TrendingUp
  },
  {
    id: 6,
    title: 'HR Intern',
    department: 'Human Resources',
    type: 'Internship',
    location: 'Remote',
    salary: '₹15k - ₹25k / month',
    icon: Users
  }
];

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('All Departments');
  const [typeFilter, setTypeFilter] = useState('All Types');

  // Filter Logic
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = departmentFilter === 'All Departments' || job.department === departmentFilter;
    const matchesType = typeFilter === 'All Types' || job.type === typeFilter;
    
    return matchesSearch && matchesDept && matchesType;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setDepartmentFilter('All Departments');
    setTypeFilter('All Types');
  };

  const departments = ['All Departments', ...new Set(jobsData.map(job => job.department))];
  const types = ['All Types', ...new Set(jobsData.map(job => job.type))];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-forest dark:text-brand-beige mb-6">
            Join the <span className="bg-gradient-to-r from-brand-leaf to-brand-brown bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-lg text-brand-forest/70 dark:text-brand-beige/70 max-w-2xl mx-auto leading-relaxed">
            At Treetor, we don't just build products — we build impactful digital solutions. Find your role and grow with us.
          </p>
        </motion.div>

        {/* Search & Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glassmorphism dark:glassmorphism-dark p-6 rounded-[2rem] border border-brand-forest/10 dark:border-white/10 shadow-premium mb-16 relative z-10"
        >
          <div className="flex flex-col gap-6">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-brand-forest/40 dark:text-brand-beige/40" />
              </div>
              <input
                type="text"
                placeholder="Search jobs by title, skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/50 dark:bg-brand-forest-light/30 border border-brand-forest/10 dark:border-brand-beige/10 rounded-xl py-4 pl-12 pr-4 text-brand-forest dark:text-brand-beige placeholder:text-brand-forest/40 dark:placeholder:text-brand-beige/40 focus:outline-none focus:border-brand-leaf/50 focus:ring-1 focus:ring-brand-leaf/20 transition-all duration-300"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-xs font-bold text-brand-forest/60 dark:text-brand-beige/60 uppercase tracking-wider whitespace-nowrap self-start sm:self-center">Filter By:</span>
              
              <div className="flex-1 w-full relative">
                <select 
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="w-full appearance-none bg-white/50 dark:bg-brand-forest-light/30 border border-brand-forest/10 dark:border-brand-beige/10 rounded-xl py-3 pl-4 pr-10 text-sm text-brand-forest dark:text-brand-beige focus:outline-none focus:border-brand-leaf/50 focus:ring-1 focus:ring-brand-leaf/20 transition-all duration-300 cursor-pointer"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept} className="bg-brand-beige dark:bg-brand-forest text-brand-forest dark:text-brand-beige">{dept}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-brand-forest/50 dark:text-brand-beige/50" />
                </div>
              </div>

              <div className="flex-1 w-full relative">
                <select 
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full appearance-none bg-white/50 dark:bg-brand-forest-light/30 border border-brand-forest/10 dark:border-brand-beige/10 rounded-xl py-3 pl-4 pr-10 text-sm text-brand-forest dark:text-brand-beige focus:outline-none focus:border-brand-leaf/50 focus:ring-1 focus:ring-brand-leaf/20 transition-all duration-300 cursor-pointer"
                >
                  {types.map(type => (
                    <option key={type} value={type} className="bg-brand-beige dark:bg-brand-forest text-brand-forest dark:text-brand-beige">{type}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-brand-forest/50 dark:text-brand-beige/50" />
                </div>
              </div>

              <button 
                onClick={resetFilters}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-brand-forest/10 dark:border-brand-beige/20 text-brand-forest dark:text-brand-beige text-sm font-semibold hover:bg-brand-forest/5 dark:hover:bg-brand-beige/5 transition-colors duration-300"
              >
                Reset Filters
              </button>
              
              <div className="hidden sm:block ml-auto text-xs font-semibold text-brand-forest/50 dark:text-brand-beige/50">
                {filteredJobs.length} positions
              </div>
            </div>
          </div>
        </motion.div>

        {/* Job Cards Grid */}
        <AnimatePresence mode="wait">
          {filteredJobs.length > 0 ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
            >
              {filteredJobs.map((job, index) => {
                const Icon = job.icon;
                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white/40 dark:bg-brand-forest-light/40 backdrop-blur-sm border border-brand-forest/5 dark:border-white/10 rounded-3xl p-6 shadow-premium transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(62,142,65,0.15)] dark:hover:shadow-[0_20px_40px_rgba(62,142,65,0.08)] overflow-hidden"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-leaf/0 via-brand-leaf/0 to-brand-leaf/5 dark:to-brand-leaf/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="w-12 h-12 rounded-2xl bg-brand-forest/5 dark:bg-brand-beige/5 border border-brand-forest/10 dark:border-brand-beige/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-leaf/10 dark:group-hover:bg-brand-leaf/20 group-hover:border-brand-leaf/30 transition-all duration-500">
                      <Icon className="w-6 h-6 text-brand-forest dark:text-brand-beige group-hover:text-brand-leaf transition-colors duration-500" />
                    </div>

                    <h3 className="text-xl font-bold text-brand-forest dark:text-brand-beige mb-1 group-hover:text-brand-leaf transition-colors duration-300">
                      {job.title}
                    </h3>
                    <p className="text-xs font-bold text-brand-forest/50 dark:text-brand-beige/50 uppercase tracking-wider mb-6">
                      {job.department}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 mb-8">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-forest/5 dark:bg-white/5 border border-brand-forest/5 dark:border-white/5 text-[11px] font-semibold text-brand-forest/70 dark:text-brand-beige/70">
                        <Briefcase className="w-3.5 h-3.5 text-brand-leaf" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-forest/5 dark:bg-white/5 border border-brand-forest/5 dark:border-white/5 text-[11px] font-semibold text-brand-forest/70 dark:text-brand-beige/70">
                        <MapPin className="w-3.5 h-3.5 text-rose-500" />
                        {job.location}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-auto border-t border-brand-forest/10 dark:border-brand-beige/10 pt-5">
                      <div className="flex items-center gap-1.5">
                        <IndianRupee className="w-4 h-4 text-brand-forest/60 dark:text-brand-beige/60" />
                        <span className="text-sm font-bold text-brand-forest dark:text-brand-beige">{job.salary}</span>
                      </div>
                      
                      <button className="flex items-center justify-center gap-2 px-4 py-2 bg-brand-forest dark:bg-brand-beige text-brand-beige dark:text-brand-forest text-sm font-semibold rounded-xl transition-all duration-300 group-hover:bg-brand-leaf dark:group-hover:bg-brand-leaf dark:group-hover:text-brand-forest group-hover:shadow-md group-hover:shadow-brand-leaf/20">
                        Apply Now
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glassmorphism dark:glassmorphism-dark p-12 rounded-[2rem] border border-brand-forest/10 dark:border-white/10 text-center relative z-10"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-brand-forest/5 dark:bg-white/5 flex items-center justify-center mb-6">
                <Frown className="w-10 h-10 text-brand-forest/40 dark:text-brand-beige/40" />
              </div>
              <h3 className="text-2xl font-bold text-brand-forest dark:text-brand-beige mb-3">No positions found</h3>
              <p className="text-brand-forest/60 dark:text-brand-beige/60 max-w-md mx-auto mb-8">
                We couldn't find any roles matching your current filters. Try adjusting your search criteria or checking back later.
              </p>
              <button 
                onClick={resetFilters}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-forest hover:bg-brand-forest-light dark:bg-brand-beige dark:hover:bg-brand-beige-dark text-brand-beige dark:text-brand-forest font-semibold rounded-full shadow-premium transition-all duration-300"
              >
                Clear Filters
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-leaf/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-brown/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
