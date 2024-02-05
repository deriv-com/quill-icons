import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedIosCaptionIcon = (
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
      <path d='M7.805 9.688c0 1.078-.54 1.757-1.453 1.757-.891 0-1.43-.68-1.43-1.758S5.46 7.93 6.352 7.93c.914 0 1.453.68 1.453 1.758M13.5 6.805v5.414c0 .422-.023 1.101-.258 1.687a2.4 2.4 0 0 1-.75 1.008 3.2 3.2 0 0 1-.844.445c-.398.118-.867.141-1.453.141H4.781c-.586 0-1.054-.023-1.453-.14a3.2 3.2 0 0 1-.844-.446 2.4 2.4 0 0 1-.75-1.008C1.5 13.32 1.5 12.641 1.5 12.22V6.805c0-.422 0-1.102.234-1.688.118-.304.375-.726.75-1.008.235-.187.493-.351.844-.445.399-.117.867-.164 1.453-.164h5.414c.586 0 1.055.047 1.453.164.352.117.61.281.844.445.375.282.633.704.75 1.008.235.586.258 1.266.258 1.688m-9.633 5.062V9.266h-.539v2.601zm.024-3.328a.31.31 0 0 0-.305-.305.31.31 0 0 0-.305.305c0 .164.14.305.305.305a.31.31 0 0 0 .305-.305m4.476 1.149c0-1.383-.773-2.25-2.015-2.25-1.22 0-1.993.867-1.993 2.25 0 1.382.774 2.25 1.993 2.25 1.242 0 2.015-.868 2.015-2.25m3.492.937c0-.61-.375-.984-1.265-1.172l-.492-.117c-.586-.117-.82-.352-.82-.703 0-.445.398-.703.96-.703.563 0 .938.28.985.773h.539c-.024-.75-.657-1.265-1.524-1.265-.89 0-1.523.515-1.523 1.218 0 .633.375 1.031 1.242 1.219l.492.094c.586.14.844.375.844.75 0 .422-.445.726-1.031.726-.61 0-1.055-.28-1.125-.75H8.6c.047.75.704 1.242 1.641 1.242.985 0 1.617-.492 1.617-1.312' />
    </g>
    <defs>
      <clipPath id='f395f0638225b374a90043bbc9c541b1__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedIosCaptionIcon);
export default ForwardRef;
