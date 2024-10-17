import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 9.5a5.23 5.23 0 0 0-2.625-4.523 5.14 5.14 0 0 0-5.25 0A5.18 5.18 0 0 0 .75 9.5a5.19 5.19 0 0 0 2.625 4.547c1.617.96 3.61.96 5.25 0A5.24 5.24 0 0 0 11.25 9.5M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6.375-3.187v.539c.305.023.61.117.914.21.047 0 .07.024.117.024.188.047.305.258.258.469-.047.187-.258.304-.469.258-.047-.024-.117-.024-.164-.047-.164-.047-.351-.118-.539-.141-.445-.047-.844 0-1.148.117-.305.14-.446.328-.469.469-.047.234.047.375.234.516.258.14.633.257 1.079.375v.023c.421.117.914.258 1.289.492.445.305.632.797.539 1.336-.094.492-.446.844-.891 1.008-.21.094-.492.164-.773.164v.563a.37.37 0 0 1-.375.374.385.385 0 0 1-.375-.374v-.586c-.188-.047-.493-.141-.75-.211l-.493-.141a.393.393 0 0 1-.234-.492.4.4 0 0 1 .469-.235c.164.047.304.118.468.165.258.07.54.14.657.164.468.07.867.023 1.125-.07.258-.118.398-.282.445-.47.024-.257-.047-.445-.258-.585-.281-.188-.61-.282-.96-.375-.048 0-.094-.024-.141-.047-.422-.094-.867-.235-1.22-.47a1.4 1.4 0 0 1-.491-.491c-.117-.235-.14-.492-.094-.774.094-.492.469-.82.914-1.008.164-.07.375-.14.563-.164v-.585c0-.188.164-.375.375-.375.21 0 .375.187.375.375z' />
    </g>
    <defs>
      <clipPath id='a86f7cdbaee39cdb3fcaa133f01ba00b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarCaptionRegularIcon);
export default ForwardRef;
