import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasskeyLgBoldIcon = (
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
      <path d='M11.64 15.148a3.86 3.86 0 0 1-2.421-.82c-.156-.117-.274-.234-.43-.351-.781-.782-1.172-1.758-1.172-2.852 0-1.133.39-2.07 1.172-2.852.781-.78 1.758-1.171 2.852-1.171 1.132 0 2.07.39 2.851 1.171.82.782 1.211 1.758 1.211 2.852s-.39 2.07-1.21 2.852l-.352.351c-.157.117-.313.195-.47.313-.312.195-.663.312-1.054.43-.312.038-.625.077-.976.077m1.524-2.5c.469-.43.664-.898.664-1.523 0-.586-.195-1.055-.664-1.523-.43-.43-.898-.625-1.523-.625s-1.094.195-1.524.625-.625.898-.625 1.523c0 .586.195 1.094.625 1.523.43.43.938.625 1.524.625.625 0 1.093-.195 1.523-.625M8.79 16.36l.04-.039a13 13 0 0 1 2.773-.312h.234c.234 0 .469 0 .703.039.313 0 .625.039.938.078-.04.234-.04.43-.04.625.04.703.235 1.328.508 1.953.43.781 1.016 1.445 1.758 1.914v2.617H4.258v-3.086q0-.878.469-1.64c.351-.508.742-.899 1.289-1.172.898-.43 1.797-.781 2.773-1.016zm2.852 1.524c-.82 0-1.641.078-2.422.273a11 11 0 0 0-2.383.86 1.9 1.9 0 0 0-.508.468c-.117.235-.195.43-.195.664v1.211h7.5c-.547-.507-.977-1.132-1.328-1.836a6.3 6.3 0 0 1-.586-1.64zm7.148 7.344-1.406-1.368v-4.257a3.2 3.2 0 0 1-1.64-1.133c-.43-.586-.626-1.211-.626-1.953 0-.899.313-1.641.938-2.266a3.07 3.07 0 0 1 2.265-.937c.899 0 1.64.312 2.266.937.625.625.937 1.406.937 2.266 0 .703-.195 1.289-.546 1.836-.391.507-.86.898-1.485 1.132l1.133 1.172-1.406 1.367 1.406 1.368zm-.469-8.243c.352 0 .664-.156.82-.43a.89.89 0 0 0 0-.976.85.85 0 0 0-.82-.43c-.351-.039-.664.157-.86.43a1.08 1.08 0 0 0 0 .977c.196.273.509.43.86.43' />
    </g>
    <defs>
      <clipPath id='0b0cbe5148ed93d48d60e75a52c35c19__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasskeyLgBoldIcon);
export default ForwardRef;
