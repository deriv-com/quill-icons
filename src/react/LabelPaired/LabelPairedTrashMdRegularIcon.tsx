import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTrashMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.563 5a.49.49 0 0 0-.438.25L4.656 6h4.688l-.469-.75A.49.49 0 0 0 8.437 5H5.563Zm4.968 1H13.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-.563l-.812 11.156a1.96 1.96 0 0 1-.625 1.313c-.375.333-.833.51-1.375.531h-6.25c-.542-.02-1-.198-1.375-.531a1.96 1.96 0 0 1-.625-1.313L1.062 7H.5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5H3.469l.812-1.281c.313-.459.74-.698 1.282-.719h2.875c.541.02.968.26 1.28.719L10.532 6Zm1.406 1H2.063l.812 11.063c.02.27.125.49.313.656a.936.936 0 0 0 .687.281h6.25c.27 0 .5-.094.688-.281a.938.938 0 0 0 .312-.657L11.938 7Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashMdRegularIcon);
export default ForwardRef;
