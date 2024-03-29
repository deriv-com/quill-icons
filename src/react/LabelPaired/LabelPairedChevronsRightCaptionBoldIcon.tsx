import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightCaptionBoldIcon = (
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
      <path d='M10.898 9.102c.211.234.211.585 0 .796l-4.5 4.5c-.234.235-.585.235-.796 0a.513.513 0 0 1 0-.773l4.101-4.102-4.101-4.125a.513.513 0 0 1 0-.773.513.513 0 0 1 .773 0zm-9-4.5 4.5 4.5c.211.234.211.585 0 .796l-4.5 4.5c-.234.235-.585.235-.796 0a.513.513 0 0 1 0-.773l4.101-4.102-4.101-4.125a.513.513 0 0 1 0-.773.513.513 0 0 1 .773 0z' />
    </g>
    <defs>
      <clipPath id='0066d7662d8afdaf97e19993c2a8e1f9__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightCaptionBoldIcon);
export default ForwardRef;
