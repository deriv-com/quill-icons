import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzlePieceTwoLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.188 16.36c0-.196-.04-.352-.157-.47-.039-.117-.156-.195-.234-.273-.078-.039-.117-.117-.156-.156-.079-.078-.079-.156-.079-.274 0-.117.079-.273.235-.43.156-.116.43-.194.703-.194s.547.078.703.195c.078.078.117.156.156.195.04.078.079.156.079.235a.54.54 0 0 1-.235.43c-.195.155-.39.39-.39.741 0 .196.078.391.195.547a.8.8 0 0 0 .586.235h1.68c.156 0 .312.156.312.312v1.172c0 .43.351.781.781.781a.79.79 0 0 0 .664-.39c.157-.196.274-.274.43-.274s.273.117.43.274c.117.156.195.43.195.703 0 .312-.078.586-.195.742-.157.195-.274.234-.43.234s-.273-.039-.43-.234a.79.79 0 0 0-.664-.39.784.784 0 0 0-.781.78v2.422c0 .196-.156.352-.313.352h-1.68a.17.17 0 0 1-.155-.156c0-.04.039-.117.117-.196.312-.234.508-.546.508-.937a1.1 1.1 0 0 0-.508-.938 1.67 1.67 0 0 0-1.055-.39c-.39 0-.781.156-1.055.39a1.1 1.1 0 0 0-.508.938c0 .39.196.703.508.937.078.079.117.157.117.196a.17.17 0 0 1-.156.156H9.648c-.156 0-.312-.156-.312-.352v-5.82c0-.156.156-.312.312-.312h1.758c.43 0 .781-.352.781-.782m-.743-.196a1.1 1.1 0 0 1-.351-.39c-.117-.157-.156-.352-.156-.586 0-.391.195-.704.507-.938a1.9 1.9 0 0 1 1.055-.352c.39 0 .781.157 1.055.352.156.117.234.234.312.352.117.195.195.39.195.585 0 .43-.195.743-.507.977-.078.078-.117.156-.117.195s0 .078.039.078c.039.04.078.04.117.04h1.68c.195 0 .312-.118.312-.313v-5.82c0-.156-.117-.352-.313-.352h-1.68a.76.76 0 0 1-.78-.781c0-.313.195-.547.39-.703.156-.156.235-.274.235-.43a.54.54 0 0 0-.235-.43 1.26 1.26 0 0 0-.703-.234c-.273 0-.547.117-.703.234a.54.54 0 0 0-.235.43c0 .156.079.274.235.43.195.156.39.39.39.703a.76.76 0 0 1-.78.781h-1.72c-.156 0-.312.156-.312.352v1.133a.76.76 0 0 1-.781.78.76.76 0 0 1-.664-.35c-.157-.196-.274-.274-.43-.274s-.273.078-.43.273c-.117.156-.195.39-.195.703 0 .274.078.547.195.704.157.195.274.273.43.273s.273-.078.43-.274a.79.79 0 0 1 .664-.39c.43 0 .781.351.781.82v2.422c0 .195.156.313.313.313h1.718c.078 0 .156-.04.156-.118 0-.039 0-.078-.039-.117s-.039-.078-.078-.117z' />
    </g>
    <defs>
      <clipPath id='c005a4d19c5696c5af02c7b6a270d513__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoLgFillIcon);
export default ForwardRef;
