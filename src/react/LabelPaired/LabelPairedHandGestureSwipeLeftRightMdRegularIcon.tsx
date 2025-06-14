import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureSwipeLeftRightMdRegularIcon = (
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
      <path d='M9.969 7.219c.594 0 1.094.5 1.094 1.093v2.438q.234-.093.468-.094c.469 0 .875.281 1.094.656.094-.03.219-.03.313-.03.468 0 .874.28 1.093.624h.156c.688 0 1.25.563 1.25 1.25v1.875c0 1.219-1 2.188-2.187 2.188h-2.656c-.469 0-.906-.094-1.313-.344l-.187-.062a2.83 2.83 0 0 1-1.469-2.5v-.376c0-.5.219-.937.625-1.25l.438-.312c.062-.062.124-.094.187-.156V8.313c0-.594.5-1.094 1.094-1.094M9.5 8.312v5.626a.336.336 0 0 1-.312.312.336.336 0 0 1-.313-.312V13l-.25.188c-.219.187-.375.437-.375.75v.374c0 .813.438 1.563 1.156 1.938l.156.094c.313.156.657.25 1.032.25h2.656c.875 0 1.563-.688 1.563-1.563v-1.875a.627.627 0 0 0-.626-.625c-.062 0-.156 0-.218.063-.094 0-.188 0-.25-.031-.094-.032-.156-.126-.156-.188a.67.67 0 0 0-.626-.469.53.53 0 0 0-.312.094.37.37 0 0 1-.312.031c-.094-.062-.157-.156-.157-.25a.64.64 0 0 0-.625-.5c-.219 0-.406.125-.531.281-.062.126-.219.157-.344.126a.3.3 0 0 1-.219-.282V8.312a.48.48 0 0 0-.468-.468.46.46 0 0 0-.469.468m5.75 2.032 1.906-1.906a.3.3 0 0 0 0-.438L15.25 6.094a.375.375 0 0 0-.437 0c-.126.125-.094.312 0 .437l1.406 1.407h-3.657a.28.28 0 0 0-.28.28c0 .157.124.313.28.313h3.657l-1.407 1.375a.38.38 0 0 0 0 .438.3.3 0 0 0 .438 0m-10 0L3.344 8.438a.375.375 0 0 1 0-.438L5.25 6.094a.3.3 0 0 1 .438 0 .3.3 0 0 1 0 .437L4.28 7.906h3.657c.156 0 .312.157.312.313a.336.336 0 0 1-.312.312H4.28l1.407 1.375a.3.3 0 0 1 0 .438.3.3 0 0 1-.438 0' />
    </g>
    <defs>
      <clipPath id='f3897769dbdd2d30453d6a73845147dd__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureSwipeLeftRightMdRegularIcon);
export default ForwardRef;
