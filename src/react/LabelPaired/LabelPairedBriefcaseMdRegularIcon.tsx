import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5 5.5V7h6V5.5q-.03-.469-.5-.5h-5q-.469.031-.5.5M4 7V5.5q.03-.625.438-1.062A1.63 1.63 0 0 1 5.5 4h5q.624.03 1.063.438.405.436.437 1.062V7h2q.844.03 1.406.594Q15.97 8.156 16 9v8q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17V9q.03-.843.594-1.406Q1.157 7.032 2 7zm7.5 1H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 9v3h14V9a.97.97 0 0 0-.281-.719A.97.97 0 0 0 14 8zm3.5 5h-4.5v1.5a.97.97 0 0 1-.281.719.97.97 0 0 1-.719.281h-3a.97.97 0 0 1-.719-.281.97.97 0 0 1-.281-.719V13H1v4q0 .438.281.719A.97.97 0 0 0 2 18h12a.97.97 0 0 0 .719-.281A.97.97 0 0 0 15 17zm-8.5 0v1.5h3V13z' />
    </g>
    <defs>
      <clipPath id='5879d842ebba9a2a5f97f13b3e9d810b__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseMdRegularIcon);
export default ForwardRef;
