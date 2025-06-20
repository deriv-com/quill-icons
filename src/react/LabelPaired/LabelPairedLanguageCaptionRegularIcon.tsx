import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.125 5.75H1.5a.755.755 0 0 0-.75.75v6c0 .422.328.75.75.75h5.625zm.75 0v7.5H13.5c.398 0 .75-.328.75-.75v-6a.77.77 0 0 0-.75-.75zM15 6.5v6c0 .844-.68 1.5-1.5 1.5h-12A1.48 1.48 0 0 1 0 12.5v-6C0 5.68.656 5 1.5 5h12c.82 0 1.5.68 1.5 1.5M4.078 7.508l1.5 3.75c.094.187 0 .398-.21.469-.188.093-.4 0-.47-.211l-.21-.493H2.789l-.21.493c-.071.21-.282.304-.47.21-.21-.07-.304-.28-.21-.468l1.5-3.75a.35.35 0 0 1 .351-.258c.14 0 .281.094.328.258M3.75 8.656l-.656 1.594h1.289zm7.875-1.031V8h1.5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.117l-.094.281a4.7 4.7 0 0 1-1.031 1.617c.07.047.14.094.234.141l.445.281a.37.37 0 0 1 .118.516.37.37 0 0 1-.516.117l-.445-.258a5 5 0 0 1-.422-.304c-.188.14-.399.257-.61.375l-.398.21c-.187.094-.422 0-.516-.187-.093-.164 0-.398.165-.492l.421-.211c.118-.047.235-.117.352-.188l-.492-.492c-.14-.164-.14-.398 0-.539.164-.14.398-.14.539 0l.539.54c.398-.376.703-.844.914-1.384V8.75H9.375A.37.37 0 0 1 9 8.375C9 8.188 9.164 8 9.375 8h1.5v-.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375' />
    </g>
    <defs>
      <clipPath id='c7d66213de0c580c1e7983549b2b6d12__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageCaptionRegularIcon);
export default ForwardRef;
