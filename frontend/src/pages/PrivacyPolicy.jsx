import React from 'react';
import { ChevronRight, Shield, Eye, Lock, Database, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-og-dark text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-og-dark via-og-dark/95 to-og-green/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-og-gold" />
              <span className="text-og-gold font-black uppercase tracking-[0.4em] text-xs">Legal</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              Privacy <span className="text-og-green italic">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Your privacy and data security are fundamental to our operations. This policy outlines how Olive Gem Global Company Ltd collects, uses, and protects your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed text-lg">
                  <strong className="text-og-dark">Effective Date:</strong> January 1, 2025
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Olive Gem Global Company Ltd ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-og-green/10 rounded-lg flex items-center justify-center">
                    <Database className="text-og-green" size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-og-dark uppercase tracking-tight">Information We Collect</h2>
                </div>
                <div className="space-y-6 ml-16">
                  <div>
                    <h3 className="text-xl font-bold text-og-dark mb-4">Personal Information</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We may collect personal information that you provide directly to us, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>Name, email address, and contact information</li>
                      <li>Business information and professional details</li>
                      <li>Communication preferences and inquiry details</li>
                      <li>Information provided through forms, emails, or phone calls</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-og-dark mb-4">Technical Information</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We automatically collect certain information when you visit our website:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Device information and operating system</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-og-gold/10 rounded-lg flex items-center justify-center">
                    <Eye className="text-og-gold" size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-og-dark uppercase tracking-tight">How We Use Your Information</h2>
                </div>
                <div className="ml-16">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-3 ml-4">
                    <li><strong>Provide Services:</strong> To deliver our procurement and energy services</li>
                    <li><strong>Communication:</strong> To respond to your inquiries and provide customer support</li>
                    <li><strong>Business Operations:</strong> To process transactions and maintain business records</li>
                    <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                    <li><strong>Website Improvement:</strong> To analyze usage and improve our website functionality</li>
                    <li><strong>Marketing:</strong> To send relevant information about our services (with your consent)</li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-og-dark/10 rounded-lg flex items-center justify-center">
                    <Shield className="text-og-dark" size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-og-dark uppercase tracking-tight">Information Sharing & Disclosure</h2>
                </div>
                <div className="ml-16">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-3 ml-4">
                    <li><strong>Service Providers:</strong> Trusted third parties who assist in operating our business</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-og-green/10 rounded-lg flex items-center justify-center">
                    <Lock className="text-og-green" size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-og-dark uppercase tracking-tight">Data Security</h2>
                </div>
                <div className="ml-16">
                  <p className="text-gray-600 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Secure data storage systems</li>
                    <li>Access controls and authentication procedures</li>
                    <li>Regular security assessments and updates</li>
                    <li>Employee training on data protection practices</li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-og-gold/10 rounded-lg flex items-center justify-center">
                    <Shield className="text-og-gold" size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-og-dark uppercase tracking-tight">Your Rights</h2>
                </div>
                <div className="ml-16">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-3 ml-4">
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                    <li><strong>Restriction:</strong> Request limitation of how we process your information</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-6">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-og-dark/10 rounded-lg flex items-center justify-center">
                    <Database className="text-og-dark" size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-og-dark uppercase tracking-tight">Cookies & Tracking Technologies</h2>
                </div>
                <div className="ml-16">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We use cookies and similar technologies to enhance your browsing experience and analyze website usage. You can control cookie preferences through your browser settings.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    For more detailed information about our cookie practices, please refer to our <Link to="/cookie-policy" className="text-og-green hover:text-og-dark transition-colors font-medium">Cookie Policy</Link>.
                  </p>
                </div>
              </div>

              {/* Changes to Policy */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-og-green/10 rounded-lg flex items-center justify-center">
                    <Eye className="text-og-green" size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-og-dark uppercase tracking-tight">Changes to This Policy</h2>
                </div>
                <div className="ml-16">
                  <p className="text-gray-600 leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the effective date.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-black text-og-dark uppercase tracking-tight mb-6">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-og-green" size={20} />
                    <span className="text-gray-600">privacy@olivegemglobal.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="text-og-green" size={20} />
                    <span className="text-gray-600">Data Protection Officer</span>
                  </div>
                </div>
              </div>

              {/* Back to Home */}
              <div className="text-center pt-8">
                <Link
                  to="/"
                  className="inline-flex items-center gap-4 text-og-dark hover:text-og-green transition-colors font-bold uppercase tracking-widest text-sm"
                >
                  <span>Back to Home</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
