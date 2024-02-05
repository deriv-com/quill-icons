import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaCaptionRegularIcon = (
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
      <path d='M.75 4.625v8.25q.024.469.328.797.328.304.797.328h9.75q.352.023.375.375-.023.352-.375.375h-9.75q-.797-.023-1.336-.54-.515-.538-.539-1.335v-8.25q.023-.352.375-.375.352.023.375.375m6.21 3.914L5.25 6.805 3.117 8.96A.31.31 0 0 0 3 9.219v2.531h7.5V9.547a.4.4 0 0 0-.094-.258L8.953 7.602l-.914.937a.78.78 0 0 1-.539.211.78.78 0 0 1-.54-.21m0-1.078L7.5 8l.54-.54.398-.397a.78.78 0 0 1 .539-.211.77.77 0 0 1 .539.257l1.453 1.711q.28.305.281.727v2.203a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21H3a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V9.219q0-.469.328-.797l2.133-2.133a.74.74 0 0 1 .539-.234q.305 0 .54.234z' />
    </g>
    <defs>
      <clipPath id='34518d941efc0d8ea052ff84e2b70fd6__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaCaptionRegularIcon);
export default ForwardRef;
