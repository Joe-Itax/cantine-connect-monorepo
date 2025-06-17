// "use client";

// import { Button } from "@workspace/ui/components/button";

// export default function ContactSection() {
//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     // console.log(data);
//   };
//   return (
//     <section id="contact" className="py-16 pt-24 bg-gray-100">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold mb-4">
//           Des questions ? Contactez l'administration de l'école !
//         </h2>
//         <p className="text-gray-600 mb-8 max-w-xl mx-auto">
//           Pour toute demande concernant l'inscription de votre enfant à la
//           cantine, la gestion de son compte ou d'autres questions spécifiques,
//           veuillez vous adresser directement à l'administration de l'école.
//         </p>
//         {/* Vous pouvez laisser ce formulaire si c'est pour des "questions générales sur l'application" */}
//         <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//           <h3 className="text-2xl font-bold mb-4">
//             Contactez-nous (pour des questions générales)
//           </h3>
//           <form id="contactForm" className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-left text-gray-700 text-sm font-bold mb-2"
//               >
//                 Nom
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Votre nom"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-left text-gray-700 text-sm font-bold mb-2"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Votre email"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-left text-gray-700 text-sm font-bold mb-2"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={5}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Votre message"
//               ></textarea>
//             </div>
//             <Button type="submit" className="w-full">
//               Envoyer le message
//             </Button>
//           </form>
//         </div>
//         <p className="text-center text-gray-600 mt-4">
//           Pour des questions urgentes, veuillez consulter les horaires de bureau
//           de l'école.
//         </p>
//       </div>
//     </section>
//   );
// }
"use client";

import { Button } from "@workspace/ui/components/button";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      //   console.log("formData to send: ", formData);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP! statut: ${response.status}`);
      }

      const result = await response.json();
      setSubmitStatus({
        success: true,
        message: "Message envoyé avec succès! Nous vous répondrons bientôt.",
      });
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setSubmitStatus({
        success: false,
        message: "Une erreur est survenue. Veuillez réessayer plus tard.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 pt-24 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Des questions ? Contactez l'administration de l'école !
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Pour toute demande concernant l'inscription de votre enfant à la
          cantine, la gestion de son compte ou d'autres questions spécifiques,
          veuillez vous adresser directement à l'administration de l'école.
        </p>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">
            Contactez-nous (pour des questions générales)
          </h3>
          {submitStatus && (
            <div
              className={`mb-4 p-4 rounded ${
                submitStatus.success
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          <form id="contactForm" className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-left text-gray-700 text-sm font-bold mb-2"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-left text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Votre email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-left text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Votre message"
              ></textarea>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </Button>
          </form>
        </div>
        <p className="text-center text-gray-600 mt-4">
          Pour des questions urgentes, veuillez consulter les horaires de bureau
          de l'école.
        </p>
      </div>
    </section>
  );
}
