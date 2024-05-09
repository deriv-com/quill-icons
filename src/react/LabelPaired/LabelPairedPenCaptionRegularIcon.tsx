import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.258 4.438 7.992 5.727l1.781 1.78 1.29-1.265c.21-.234.21-.586 0-.797l-1.008-1.008c-.211-.21-.563-.21-.797 0M7.453 6.242l-5.508 5.531a1.4 1.4 0 0 0-.398.633l-.633 2.18 2.18-.656c.234-.07.469-.188.633-.375l5.53-5.508zm3.14-2.344 1.009 1.008a1.345 1.345 0 0 1 0 1.852l-7.336 7.336c-.282.258-.61.469-.961.562L.469 15.5c-.14.023-.281 0-.375-.094s-.117-.234-.094-.375l.844-2.836c.094-.351.304-.68.562-.96l7.336-7.337a1.346 1.346 0 0 1 1.852 0' />
    </g>
    <defs>
      <clipPath id='d0d037d1e8ae08dfd508488380bd2f49__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCaptionRegularIcon);
export default ForwardRef;
