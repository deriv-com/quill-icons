import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMinMdBoldIcon = (
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
      <path d='M8 5.5c-2.344 0-4.469 1.25-5.656 3.25a6.52 6.52 0 0 0 0 6.5A6.51 6.51 0 0 0 8 18.5c2.313 0 4.438-1.219 5.625-3.25a6.52 6.52 0 0 0 0-6.5C12.438 6.75 10.313 5.5 8 5.5M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M9 7.5c0 .563-.469 1-1 1-.562 0-1-.437-1-1 0-.531.438-1 1-1 .531 0 1 .469 1 1m-1 9.25v.031c-.969 0-1.75-.812-1.75-1.75v-.281l-3.437-2.375a.717.717 0 0 1-.188-1.031.717.717 0 0 1 1.031-.188L7.094 13.5c.281-.156.562-.25.906-.25.938 0 1.75.813 1.75 1.75 0 .969-.812 1.75-1.75 1.75M6 9c0 .563-.469 1-1 1-.562 0-1-.437-1-1 0-.531.438-1 1-1 .531 0 1 .469 1 1m6.5 4c-.562 0-1-.437-1-1 0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1M12 9c0 .563-.469 1-1 1-.562 0-1-.437-1-1 0-.531.438-1 1-1 .531 0 1 .469 1 1' />
    </g>
    <defs>
      <clipPath id='e3e300189febe6646f3df7f30b8bb2e6__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMinMdBoldIcon);
export default ForwardRef;
