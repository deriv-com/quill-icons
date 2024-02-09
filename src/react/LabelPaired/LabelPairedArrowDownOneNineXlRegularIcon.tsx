import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21 8.25V15h1.5q.704.047.75.75-.046.704-.75.75H18q-.704-.046-.75-.75.046-.703.75-.75h1.5V9.281l-1.266.422q-.656.188-.937-.469-.141-.656.469-.937l2.25-.75q.375-.094.656.094.328.234.328.609M8.016 28.266q-.516.468-1.032 0l-4.5-4.5q-.468-.516 0-1.032.516-.468 1.032 0l3.234 3.188V8.25q.046-.703.75-.75.703.046.75.75v17.672l3.234-3.188q.516-.468 1.032 0 .468.516 0 1.032zM20.063 19.5q-1.36.047-2.11 1.219-.655 1.219 0 2.437.75 1.173 2.11 1.219 1.359-.046 2.109-1.219.656-1.219 0-2.437-.75-1.173-2.11-1.219m-3.938 2.438q.047-1.687 1.172-2.766 1.078-1.125 2.765-1.172 1.688.047 2.766 1.172Q23.952 20.25 24 21.937v.188a4.1 4.1 0 0 1-.984 2.719l-2.953 3.375q-.516.515-1.032.093-.515-.515-.093-1.03l1.171-1.407h-.047q-1.687-.047-2.765-1.172-1.125-1.078-1.172-2.765' />
    </g>
    <defs>
      <clipPath id='01f0deb6486ea9afa835fd97cb70a37d__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineXlRegularIcon);
export default ForwardRef;
