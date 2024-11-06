import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopLossCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.445 12.852a3.8 3.8 0 0 1-1.078-.82l-.234-.282 1.43-1.43.257.282c.352.421.774.609 1.29.609.304 0 .445-.07.515-.117.07-.07.094-.14.094-.258s-.024-.164-.047-.211c-.024 0-.024-.023-.07-.047a.9.9 0 0 0-.282-.047l-.61-.094c-.726-.093-1.312-.304-1.687-.703H3c-.375-.421-.54-.937-.54-1.546 0-.329.048-.633.188-.915.141-.28.329-.539.563-.75.234-.187.539-.351.867-.445a3.3 3.3 0 0 1 1.102-.164c.515 0 .984.07 1.406.258.398.164.75.422 1.055.75l.234.258-1.43 1.453-.28-.305A2 2 0 0 0 5.741 8H5.72c-.14-.07-.328-.14-.61-.14-.28 0-.421.07-.468.093-.047.047-.07.07-.07.164 0 .07.023.117.023.14s.023.024.023.024c.047.047.164.094.399.14l.609.095c.68.093 1.266.328 1.64.703.4.375.587.914.587 1.523 0 .352-.07.68-.188.985a2.1 2.1 0 0 1-.586.773 2.5 2.5 0 0 1-.89.492 3.7 3.7 0 0 1-1.149.164c-.61 0-1.125-.094-1.57-.304zm4.782.21v-7.03h2.132v5.062h2.391v1.969z' />
    </g>
    <defs>
      <clipPath id='f0957206a26c4766f43979ddcbc1f508__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossCaptionFillIcon);
export default ForwardRef;
