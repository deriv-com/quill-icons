import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21 27.75c.375 0 .75-.328.75-.75V13.5H18a1.48 1.48 0 0 1-1.5-1.5V8.25H9c-.422 0-.75.375-.75.75v3.188a2.84 2.84 0 0 0-1.969 0c-.093.046-.234.14-.281.14v.047V9c0-1.64 1.313-3 3-3h7.734c.797 0 1.547.328 2.11.89l4.265 4.266c.563.563.891 1.313.891 2.11V27c0 1.688-1.36 3-3 3H10.36c.093-.234.14-.469.14-.75v-1.5zM5.11 13.594l.702.281a.4.4 0 0 0 .329 0l.75-.281c.468-.188.984-.047 1.312.375l.469.61c.047.093.14.14.234.14l.797.094c.516.093.89.468.985.984l.093.797c0 .093.047.187.14.234l.657.469c.375.328.516.89.328 1.36l-.281.702c-.047.094-.047.235 0 .282l.281.75c.188.468.047 1.03-.375 1.312l-.61.516a.26.26 0 0 0-.14.234l-.094.797c-.093.516-.468.89-.984.984L9 24.328v4.922c0 .281-.187.563-.422.703a.85.85 0 0 1-.75-.047L6 28.688l-1.875 1.218c-.187.14-.516.14-.75.047-.234-.14-.375-.422-.375-.703v-4.922l-.75-.094a1.195 1.195 0 0 1-.984-.984l-.094-.797a.26.26 0 0 0-.14-.234l-.61-.516C0 21.422-.141 20.86.047 20.391l.328-.703v-.329l-.328-.703c-.188-.468-.047-1.031.375-1.312l.61-.516a.26.26 0 0 0 .14-.234l.14-.797c.047-.516.422-.89.938-.985l.797-.093a.26.26 0 0 0 .234-.14l.516-.61c.281-.422.844-.563 1.312-.375M3 19.5c0 1.078.563 2.063 1.5 2.625.89.516 2.063.516 3 0C8.39 21.563 9 20.578 9 19.5c0-1.031-.61-2.016-1.5-2.578-.937-.516-2.11-.516-3 0-.937.562-1.5 1.547-1.5 2.578' />
    </g>
    <defs>
      <clipPath id='0ec1983ae720ec51f7e8298f53047d0d__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateXlBoldIcon);
export default ForwardRef;
