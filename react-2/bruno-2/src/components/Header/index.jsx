import forma from "./style.module.css";

export default function Header() {
  return (
      <div className={forma.topo}>
        <div className={forma.texto}>Facebook</div>
      </div>
  );
}

// export default function Header() {
//   return (
//       <div class="absolute left-[445px] top-[5px] h-[60px] w-[320px] bg-[#1877f2]">
//         <p class="absolute left-[15px] top-[15px] px-[10px] text-[20px] font-[700] tracking-[0] text-[#ffffff]">Facebook</p>
//       </div>
//   );
// }