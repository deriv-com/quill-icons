import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 4.5v1.344L4.063 5q2-.5 3.843.375.97.5 2.063.469a4.5 4.5 0 0 0 2.062-.563L12.5 5q.531-.28 1 0 .47.25.5.844v8.843q-.03.626-.594.907l-.969.406a5.8 5.8 0 0 1-2.437.469 5.5 5.5 0 0 1-2.406-.625q-1.656-.782-3.407-.344L1 16.375V19.5q-.03.47-.5.5-.469-.03-.5-.5v-15q.031-.469.5-.5.47.031.5.5m0 2.375v1.938l3-.626V6.063zm0 2.969v2.219l3-.626v-2.25zm4-.875v2.219a4.6 4.6 0 0 1 2.125.124L9 11.845V9.656a1 1 0 0 0-.156-.062l-2-.563a3.45 3.45 0 0 0-1.719-.062zm5 .844v2.25q.72.062 1.406-.094L13 11.594V9.375l-1.344.313A5.6 5.6 0 0 1 10 9.812m-1 3.093a1 1 0 0 0-.156-.062l-2-.563a3.45 3.45 0 0 0-1.719-.062H5v2.156a5.67 5.67 0 0 1 3.031.594q.47.219.969.344zm1 2.563a4.74 4.74 0 0 0 2.063-.406l.937-.376v-2.062l-1.344.313a5.6 5.6 0 0 1-1.656.124zm0-6.656q.72.062 1.406-.094L13 8.344V5.875l-.5.25a5.17 5.17 0 0 1-2.5.719zM9 6.78a5.3 5.3 0 0 1-1.562-.5A4.5 4.5 0 0 0 5 5.844v2.125a4.3 4.3 0 0 1 2.125.093L9 8.626zm-8 6.313v2.25l2.906-.781A.24.24 0 0 1 4 14.53v-2.094z' />
    </g>
    <defs>
      <clipPath id='cdade0cd5d385b12a1c13f14f13e247e__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredMdRegularIcon);
export default ForwardRef;
