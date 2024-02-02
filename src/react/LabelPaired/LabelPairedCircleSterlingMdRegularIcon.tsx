import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingMdRegularIcon = (
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
      <path d='M15 12a7.2 7.2 0 0 0-.937-3.5A7.2 7.2 0 0 0 11.5 5.938a7 7 0 0 0-7 0A7.2 7.2 0 0 0 1.938 8.5 7.2 7.2 0 0 0 1 12q.03 1.906.938 3.5A7.2 7.2 0 0 0 4.5 18.063a7 7 0 0 0 7 0 7.2 7.2 0 0 0 2.563-2.563A7.2 7.2 0 0 0 15 12M0 12q.03-2.187 1.063-4Q2.125 6.188 4 5.063 5.906 4 8 4t4 1.063Q13.875 6.188 14.938 8q1.03 1.813 1.062 4-.03 2.188-1.062 4-1.063 1.812-2.938 2.938Q10.095 20 8 20t-4-1.062Q2.124 17.813 1.063 16 .03 14.188 0 12m8.125-3.5q-.5 0-.812.344-.313.312-.344.812L7 11h1.5q.47.031.5.5-.03.47-.5.5H7a4.8 4.8 0 0 1-.562 2h3.812q.47.031.5.5-.03.47-.5.5H5.5a.49.49 0 0 1-.437-.25.54.54 0 0 1 .03-.531l.282-.406A3.64 3.64 0 0 0 6 12h-.5q-.469-.03-.5-.5.031-.469.5-.5H6l-.031-1.344q.03-.906.625-1.531.594-.594 1.531-.625.5 0 .938.219l.656.343q.406.25.219.657-.219.406-.657.219l-.656-.313a1.1 1.1 0 0 0-.5-.125' />
    </g>
    <defs>
      <clipPath id='dce8d35213efa0cfdcafd33d6ac426f4__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingMdRegularIcon);
export default ForwardRef;
