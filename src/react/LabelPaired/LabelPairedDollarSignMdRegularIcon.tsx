import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.5 4.5v1.531c.969.094 1.938.282 2.594.469a.48.48 0 0 1 .375.594.48.48 0 0 1-.594.375C6.844 7.219 5.313 6.906 4 7.03c-.656.063-1.25.219-1.656.469-.406.281-.688.656-.813 1.281-.093.438-.031.781.094 1.031.125.282.344.5.688.72.687.437 1.687.687 2.812 1h.031c1.063.28 2.219.593 3.063 1.124.437.281.812.625 1.031 1.094q.375.75.188 1.688c-.22 1.062-.97 1.78-1.97 2.187-.562.219-1.25.344-1.968.375v1.5c0 .281-.219.5-.5.5a.494.494 0 0 1-.5-.5v-1.531c-.187-.032-.406-.032-.594-.063-.812-.125-2.062-.406-3.125-.875-.25-.093-.343-.406-.25-.656.125-.25.407-.375.657-.25.937.406 2.093.656 2.843.781 1.219.188 2.282.094 3.063-.218.781-.313 1.218-.782 1.343-1.438.094-.469.032-.781-.093-1.062a1.6 1.6 0 0 0-.688-.688c-.687-.437-1.687-.719-2.781-1l-.062-.031c-1.063-.25-2.22-.563-3.032-1.094A3.06 3.06 0 0 1 .72 10.25Q.39 9.547.53 8.563c.188-.876.625-1.47 1.25-1.907.625-.375 1.375-.562 2.125-.625C4.094 6 4.281 6 4.5 6V4.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5' />
    </g>
    <defs>
      <clipPath id='198cdb7c0b17d51b4d00588d49fb9c78__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignMdRegularIcon);
export default ForwardRef;
