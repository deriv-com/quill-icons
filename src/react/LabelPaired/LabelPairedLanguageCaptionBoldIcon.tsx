import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageCaptionBoldIcon = (
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
      <path d='M1.5 5h12q.633.024 1.055.445.421.423.445 1.055v6a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-12a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 12.5v-6q.024-.632.445-1.055Q.868 5.024 1.5 5m12 1.125h-6v6.75h6q.352-.023.375-.375v-6q-.023-.352-.375-.375m-9.328 1.5q-.117-.258-.422-.281-.305.024-.422.281L1.828 11q-.141.399.234.61.4.14.61-.235l.21-.469h1.735l.211.469q.21.375.61.234.375-.21.234-.609zm.023 2.344h-.89L3.75 8.96zm6.493-2.625q.42.046.468.468v.094h1.407q.42.048.468.469-.046.422-.469.469h-.046l-.047.117a4.6 4.6 0 0 1-.914 1.523l.023.024q.024 0 .024.023l.445.258q.351.258.164.633-.258.351-.633.164l-.445-.258a2 2 0 0 1-.305-.21q-.375.28-.797.468l-.094.023q-.398.141-.609-.234-.14-.399.235-.61l.093-.046q.21-.094.422-.235l-.281-.28q-.282-.33 0-.657.328-.282.656 0l.352.351q.445-.468.703-1.054H9q-.421-.047-.469-.469.047-.421.469-.469h1.219v-.093q.046-.423.469-.47' />
    </g>
    <defs>
      <clipPath id='2b7fcc76d56c0152__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageCaptionBoldIcon);
export default ForwardRef;
