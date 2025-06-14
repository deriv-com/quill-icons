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
      <path d='M1 4.5v1.375l3.063-.844a5.37 5.37 0 0 1 3.812.375A4.38 4.38 0 0 0 12 5.281L12.5 5c.656-.375 1.5.094 1.5.875v8.813c0 .406-.25.75-.625.906l-.937.406c-1.563.688-3.344.625-4.876-.125a4.76 4.76 0 0 0-3.406-.344L1 16.406V19.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-15c0-.25.219-.5.5-.5.25 0 .5.25.5.5m0 2.406v1.938l3-.656V6.062zm0 2.969v2.219l3-.656v-2.22zM5 9v2.219a4.9 4.9 0 0 1 2.125.094L9 11.875V9.656c-.062 0-.125-.031-.156-.031l-2.031-.594a3.56 3.56 0 0 0-1.72-.062zm5 .844v2.25c.469.031.938 0 1.406-.125L13 11.625V9.406l-1.375.313A5.7 5.7 0 0 1 10 9.844m-1 3.062c-.062 0-.125-.031-.156-.031l-2.031-.594a3.56 3.56 0 0 0-1.72-.062L5 12.25v2.125c1.031-.094 2.063.125 3.031.594.313.156.625.281.969.375zm1 2.563a4.6 4.6 0 0 0 2.031-.375l.969-.406v-2.032l-1.375.313a5.7 5.7 0 0 1-1.625.125zm0-6.656v.03c.469.032.938 0 1.406-.124L13 8.375v-2.5l-.5.281c-.781.438-1.656.688-2.5.688zM9 6.78c-.562-.062-1.062-.25-1.562-.5A4.44 4.44 0 0 0 5 5.875v2.094a4.75 4.75 0 0 1 2.094.093L9 8.626zm-8 6.344v2.25l2.906-.812c.031 0 .063 0 .094-.032V12.47z' />
    </g>
    <defs>
      <clipPath id='f0888e6b40046816ccee360dd432cf47__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredMdRegularIcon);
export default ForwardRef;
