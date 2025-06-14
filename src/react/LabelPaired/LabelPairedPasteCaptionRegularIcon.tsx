import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteCaptionRegularIcon = (
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
      <path d='M3.188 4.719C3.164 4.883 3 5 2.812 5h-.187a.385.385 0 0 0-.375.375v.375h3v-.375A.4.4 0 0 0 4.875 5h-.21a.38.38 0 0 1-.376-.281c-.047-.258-.281-.469-.539-.469a.58.58 0 0 0-.562.469M3.75 3.5c.516 0 .96.328 1.172.75H6c.82 0 1.5.68 1.5 1.5h-.75A.77.77 0 0 0 6 5h-.07c.047.117.07.258.07.375v.422a1.84 1.84 0 0 0-1.125.703H2.25a.74.74 0 0 1-.75-.75v-.375c0-.117.023-.258.047-.375H1.5a.755.755 0 0 0-.75.75v6.75c0 .422.328.75.75.75h3V14h-3A1.48 1.48 0 0 1 0 12.5V5.75c0-.82.656-1.5 1.5-1.5h1.055c.21-.422.656-.75 1.195-.75m6.75 11.25c.398 0 .75-.328.75-.75V9.219a.38.38 0 0 0-.117-.258L9.539 7.367a.38.38 0 0 0-.258-.117H6.75A.755.755 0 0 0 6 8v6c0 .422.328.75.75.75zm1.148-6.328c.211.21.352.515.352.797V14c0 .844-.68 1.5-1.5 1.5H6.75a1.48 1.48 0 0 1-1.5-1.5V8c0-.82.656-1.5 1.5-1.5h2.531c.281 0 .586.117.797.328z' />
    </g>
    <defs>
      <clipPath id='930ab9c27b326aee768580e0e75530d6__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteCaptionRegularIcon);
export default ForwardRef;
