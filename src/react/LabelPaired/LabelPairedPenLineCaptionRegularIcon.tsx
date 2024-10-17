import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.305 4.438c-.211-.211-.563-.211-.797 0L8.242 5.727l1.781 1.78 1.29-1.265c.21-.234.21-.586 0-.797zm-8.11 7.335c-.187.165-.304.399-.375.633l-.656 2.18 2.18-.633c.234-.07.469-.21.633-.398l5.53-5.508-1.804-1.805zm6.797-7.875a1.346 1.346 0 0 1 1.852 0l1.008 1.008a1.345 1.345 0 0 1 0 1.852l-7.336 7.336c-.282.258-.61.469-.961.562L.719 15.5a.36.36 0 0 1-.375-.094c-.094-.094-.117-.234-.094-.375l.844-2.836c.093-.351.304-.68.562-.96zM5.875 14.75h7.5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-7.5a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='923a13a7557d4b2909583bcb425b87c9__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineCaptionRegularIcon);
export default ForwardRef;
