import Swal from 'sweetalert2';

export const CustomSwal = Swal.mixin({
  customClass: {
    popup: 'rounded-[2.5rem] border-4 border-charcoal shadow-2xl p-6 font-body',
    title: 'font-display text-3xl text-jungle-teal mb-2',
    htmlContainer: 'text-gray-600 text-lg',
    confirmButton: 'bg-rusty-spice text-white px-8 py-3 rounded-xl font-display font-bold shadow-lg hover:bg-[#944a29] transition-all',
    cancelButton: 'bg-gray-300 text-gray-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-400 transition-all mr-2',
    icon: 'border-none' 
  },
  buttonsStyling: false,
  background: '#faf9f6',
  color: '#2d2d2d'
});