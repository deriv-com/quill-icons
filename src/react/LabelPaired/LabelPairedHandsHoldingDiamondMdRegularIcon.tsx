import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondMdRegularIcon = (
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
      <path d='m10.688 4.313 3 3a.964.964 0 0 1 0 1.406l-3 3a.964.964 0 0 1-1.407 0l-3-3a.964.964 0 0 1 0-1.406l3-3a.964.964 0 0 1 1.406 0M7 8l3 3 3-3-3-3zM2 6c1.094 0 2 .906 2 2v3.906c0 .125 0 .281.031.406.063-.093.125-.187.219-.28a1.735 1.735 0 0 1 2.469 0l2.843 2.843c.157.188.313.344.438.531.094-.187.25-.344.406-.531l2.844-2.844a1.736 1.736 0 0 1 2.469 0c.094.094.156.188.219.281.03-.124.062-.28.062-.406V8c0-1.094.875-2 2-2 1.094 0 2 .906 2 2v6.781c0 .906-.375 1.813-1.031 2.469l-2.625 2.625a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l2.625-2.625c.469-.468.75-1.093.75-1.75V8c0-.531-.469-1-1-1-.562 0-1 .469-1 1v3.906c0 .844-.344 1.656-.937 2.25l-.344.344-1.375 1.375-.5.5a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l.5-.5L15 13.781a.736.736 0 0 0 0-1.031.736.736 0 0 0-1.031 0l-2.844 2.844a2.1 2.1 0 0 0-.625 1.5V19.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-2.406c0-.563-.25-1.094-.625-1.5L6 12.75a.736.736 0 0 0-1.031 0 .736.736 0 0 0 0 1.031l1.375 1.375.5.5a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0l-.5-.5L4.25 14.5l-.312-.344C3.312 13.562 3 12.75 3 11.906V8c0-.531-.469-1-1-1-.562 0-1 .469-1 1v6.781c0 .656.25 1.281.719 1.75l2.625 2.625a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L1 17.25c-.656-.656-1-1.562-1-2.469V8c0-1.094.875-2 2-2' />
    </g>
    <defs>
      <clipPath id='b47ab83116fedb20881228711867c087__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondMdRegularIcon);
export default ForwardRef;
