import Image from "next/image";
import Link from "next/link";
import { MapPin, Award, DollarSign, Star, Users, CheckCircle } from "lucide-react";

export default function CollegeCard({ data }: any) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-200">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={data.image || "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=600"}
          alt={data.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Rank Badge */}
        <div className="absolute left-4 top-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-lg">
          {data.rank}
        </div>

        {/* Featured Badge */}
        {data.tags?.includes("Scholarship") && (
          <div className="absolute right-4 top-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
            💰 Scholarship
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {data.tags?.map((tag: string) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 border border-orange-100"
            >
              <CheckCircle size={10} />
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Location */}
        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{data.name}</h3>
        <div className="flex items-center gap-2 text-slate-600 mb-4">
          <MapPin size={16} className="text-orange-500" />
          <span className="text-sm font-medium">{data.location}</span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <DollarSign size={16} className="text-orange-500" />
            <div>
              <p className="text-xs text-slate-500">Tuition</p>
              <p className="text-sm font-bold text-slate-900">{data.tuition}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Award size={16} className="text-orange-500" />
            <div>
              <p className="text-xs text-slate-500">Acceptance</p>
              <p className="text-sm font-bold text-slate-900">{data.acceptance || "N/A"}</p>
            </div>
          </div>

          {data.employability && (
            <div className="flex items-center gap-2">
              <Users size={16} className="text-orange-500" />
              <div>
                <p className="text-xs text-slate-500">Employability</p>
                <p className="text-sm font-bold text-slate-900">{data.employability}</p>
              </div>
            </div>
          )}

          {data.rating && (
            <div className="flex items-center gap-2">
              <Star size={16} className="text-orange-500 fill-orange-500" />
              <div>
                <p className="text-xs text-slate-500">Rating</p>
                <p className="text-sm font-bold text-slate-900">{data.rating}</p>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link
            href={`/colleges/${data.slug}`}
            className="flex-1 border-2 border-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-xl hover:border-orange-300 hover:text-orange-600 transition-all duration-200 hover:scale-105 text-center"
          >
            View Details
          </Link>
          <Link
            href={`/contact?college=${data.slug}`}
            className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-4 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-center"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
