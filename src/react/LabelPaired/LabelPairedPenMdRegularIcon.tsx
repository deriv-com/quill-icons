import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenMdRegularIcon = (
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
      <path d='m12.344 5.25-1.688 1.719 2.375 2.375 1.719-1.688c.281-.312.281-.781 0-1.062L13.406 5.25c-.281-.281-.75-.281-1.062 0M9.938 7.656l-7.344 7.375c-.25.219-.438.531-.531.844l-.844 2.906 2.906-.875c.313-.093.625-.25.844-.5l7.375-7.343zm4.187-3.125 1.344 1.344a1.794 1.794 0 0 1 0 2.469l-9.781 9.781c-.375.344-.813.625-1.282.75L.625 20c-.187.031-.375 0-.5-.125s-.156-.312-.125-.5l1.125-3.781c.125-.469.406-.906.75-1.281l9.781-9.782a1.794 1.794 0 0 1 2.469 0' />
    </g>
    <defs>
      <clipPath id='f456ce9fad390b0e96db3de553f20942__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenMdRegularIcon);
export default ForwardRef;
