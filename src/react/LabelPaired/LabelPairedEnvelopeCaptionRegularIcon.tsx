import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeCaptionRegularIcon = (
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
      <path d='M1.5 5.75a.755.755 0 0 0-.75.75v.938l4.57 3.375c.399.28.938.28 1.336 0l4.594-3.376V6.5a.77.77 0 0 0-.75-.75zM.75 8.375V12.5c0 .422.328.75.75.75h9c.398 0 .75-.328.75-.75V8.375l-4.148 3.047a1.94 1.94 0 0 1-2.227 0zM0 6.5C0 5.68.656 5 1.5 5h9c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5h-9A1.48 1.48 0 0 1 0 12.5z' />
    </g>
    <defs>
      <clipPath id='6c5f92052db3c0e7f2847fd3c84bae81__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeCaptionRegularIcon);
export default ForwardRef;
