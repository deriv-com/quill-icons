import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCsvXlBoldIcon = (
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
      <path d='M3 27.75h1.5V30H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V9q.047-1.266.89-2.11Q1.735 6.048 3 6h7.781q1.22 0 2.11.89l4.218 4.22Q18 12 18 13.265V19.5h-2.25v-6H12q-.656 0-1.078-.422Q10.5 12.657 10.5 12V8.25H3q-.703.047-.75.75v18q.046.704.75.75m6.375-5.25h.75q.797 0 1.313.563.562.514.562 1.312v.375q-.047.704-.75.75-.703-.046-.75-.75v-.375q-.047-.329-.375-.375h-.75q-.328.046-.375.375v3.75q.047.329.375.375h.75q.328-.046.375-.375v-.375q.047-.704.75-.75.703.046.75.75v.375q0 .797-.562 1.313-.516.562-1.313.562h-.75q-.797 0-1.312-.562-.564-.516-.563-1.313v-3.75q0-.797.563-1.312.514-.563 1.312-.563m6.234 0h1.641q.704.046.75.75-.046.704-.75.75h-1.64q-.564.046-.61.61 0 .375.375.562l1.734.797q1.22.562 1.266 1.922 0 .89-.61 1.5-.609.609-1.5.609H14.25q-.703-.046-.75-.75.047-.704.75-.75h2.016q.563-.046.609-.61 0-.375-.375-.562l-1.734-.797q-1.22-.562-1.266-1.922 0-.89.61-1.5.609-.609 1.5-.609m4.641 0q.704.046.75.75v1.5q0 1.64.75 3.094.75-1.453.75-3.094v-1.5q.046-.704.75-.75.704.046.75.75v1.5a7.9 7.9 0 0 1-1.406 4.547l-.235.375a.72.72 0 0 1-.609.328.72.72 0 0 1-.61-.328l-.234-.375A7.9 7.9 0 0 1 19.5 24.75v-1.5q.046-.704.75-.75' />
    </g>
    <defs>
      <clipPath id='990db4c2690cd2ab3ee9194a92bf5e1b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCsvXlBoldIcon);
export default ForwardRef;
