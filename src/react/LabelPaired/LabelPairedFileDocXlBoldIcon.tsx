import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileDocXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 27.75h1.5V30H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V9q.047-1.266.89-2.11Q1.735 6.048 3 6h7.781q1.22 0 2.11.89l4.218 4.22Q18 12 18 13.265V19.5h-2.25v-6H12q-.656 0-1.078-.422Q10.5 12.657 10.5 12V8.25H3q-.703.047-.75.75v18q.046.704.75.75m5.25-5.25h1.5q.937.047 1.594.656.61.657.656 1.594v3a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 9.75 30h-1.5q-.703-.046-.75-.75v-6q.046-.704.75-.75m.75 6h.75q.703-.046.75-.75v-3q-.047-.704-.75-.75H9zm12.375-6h.75q.797 0 1.313.563.562.514.562 1.312v.375q-.046.704-.75.75-.704-.046-.75-.75v-.375q-.046-.329-.375-.375h-.75q-.329.046-.375.375v3.75q.046.329.375.375h.75q.329-.046.375-.375v-.375q.046-.704.75-.75.704.046.75.75v.375q0 .797-.562 1.313-.516.562-1.313.562h-.75q-.797 0-1.312-.562-.563-.516-.563-1.313v-3.75q0-.797.563-1.312.514-.563 1.312-.563M13.5 24.375q0-.797.563-1.312.514-.563 1.312-.563h.75q.797 0 1.313.563.562.514.562 1.312v3.75q0 .797-.562 1.313-.516.562-1.313.562h-.75q-.797 0-1.312-.562-.563-.516-.563-1.313zM15.375 24q-.328.046-.375.375v3.75q.047.329.375.375h.75q.329-.046.375-.375v-3.75q-.046-.329-.375-.375z' />
    </g>
    <defs>
      <clipPath id='98f5770eab258d61cfdc45a9b0f2f808__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileDocXlBoldIcon);
export default ForwardRef;
