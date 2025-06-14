import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRedditCaptionIcon = (
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
      <path d='M0 9.5c0-3.305 2.672-6 6-6 3.305 0 6 2.695 6 6 0 3.328-2.695 6-6 6H.867a.354.354 0 0 1-.258-.61l1.149-1.148C.656 12.664 0 11.164 0 9.5m8.18-2.39a.995.995 0 1 0 0-1.992c-.47 0-.89.327-.985.796-.797.07-1.43.774-1.43 1.594a5.1 5.1 0 0 0-2.32.68 1.53 1.53 0 0 0-.867-.282 1.39 1.39 0 0 0-1.383 1.407c0 .562.328 1.03.797 1.265.047 1.617 1.828 2.93 4.008 2.93s3.938-1.313 3.984-2.93c.47-.234.797-.726.797-1.265a1.39 1.39 0 0 0-1.383-1.407c-.328 0-.632.094-.867.282-.633-.399-1.453-.633-2.344-.68 0-.586.446-1.102 1.032-1.172a.98.98 0 0 0 .96.773M4.148 9.29c.375 0 .68.42.657.937-.024.492-.305.68-.703.68-.399 0-.75-.212-.727-.704.023-.515.375-.914.773-.914m4.454.913c.023.492-.329.703-.727.703-.375 0-.68-.187-.703-.68-.024-.515.281-.937.68-.937.375 0 .726.399.75.914m-1.125 1.313c-.258.586-.82.984-1.477.984-.68 0-1.242-.398-1.477-.984-.046-.07 0-.141.094-.141.422-.047.89-.07 1.383-.07.469 0 .938.023 1.383.07.07 0 .117.07.094.14' />
    </g>
    <defs>
      <clipPath id='6be6d5c0bd18179571b33e0bdd64b327__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRedditCaptionIcon);
export default ForwardRef;
