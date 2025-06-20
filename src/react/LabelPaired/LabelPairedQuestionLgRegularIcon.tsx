import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQuestionLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.875 8c-2.07 0-3.75 1.68-3.75 3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625c0-2.734 2.227-5 5-5h1.25c2.734 0 5 2.266 5 5a4.39 4.39 0 0 1-1.758 3.516l-2.383 1.797c-.546.39-.859 1.054-.859 1.718v.469a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-.469c0-1.054.508-2.07 1.367-2.734l2.383-1.797a3.09 3.09 0 0 0 1.25-2.5c0-2.07-1.68-3.75-3.75-3.75zm-.312 15c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938' />
    </g>
    <defs>
      <clipPath id='c287c5c1f6e06887ff064476d470ae8e__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQuestionLgRegularIcon);
export default ForwardRef;
