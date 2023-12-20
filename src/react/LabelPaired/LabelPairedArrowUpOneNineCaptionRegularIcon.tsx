import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpOneNineCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.75 4.625V8h.75c.234.016.36.14.375.375-.016.234-.14.36-.375.375H9.25c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375H10V5.14l-.633.212c-.219.046-.375-.032-.469-.235-.046-.219.032-.375.235-.469l1.125-.375c.125-.046.234-.03.328.047.11.078.164.18.164.305m-6.492-.258 2.25 2.25c.156.172.156.344 0 .516-.172.156-.344.156-.516 0L4.375 5.539v8.836c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V5.539L2.008 7.133c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l2.25-2.25c.172-.156.344-.156.516 0m6.023 8.32c.453-.015.805-.218 1.055-.609a1.213 1.213 0 0 0 0-1.219c-.25-.39-.602-.593-1.055-.609-.453.016-.804.219-1.054.61a1.214 1.214 0 0 0 0 1.218c.25.39.601.594 1.054.61M8.312 11.47c.016-.563.211-1.024.586-1.383.36-.375.82-.57 1.383-.586.563.016 1.024.21 1.383.586.375.36.57.82.586 1.383v.094c0 .515-.164.968-.492 1.359l-1.477 1.71c-.156.157-.328.165-.515.024-.172-.156-.188-.328-.047-.515l.586-.703h-.024c-.562-.016-1.023-.211-1.383-.586-.375-.36-.57-.82-.585-1.383'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineCaptionRegularIcon);
export default ForwardRef;
