import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.5 4.5v15q-.03.47-.5.5-.469-.03-.5-.5v-15q.031-.469.5-.5.47.031.5.5M14 7q.47.031.5.5v12q-.03.47-.5.5-.469-.03-.5-.5v-12q.031-.469.5-.5m-3.5 3.5v9q-.03.47-.5.5-.469-.03-.5-.5v-9q.031-.469.5-.5.47.031.5.5M6 13q.47.031.5.5v6q-.03.47-.5.5-.469-.03-.5-.5v-6q.031-.469.5-.5m-4 3q.47.031.5.5v3q-.03.47-.5.5-.469-.03-.5-.5v-3q.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='331b4c1cec0fecfc6fe494a9723d15af__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalMdRegularIcon);
export default ForwardRef;
