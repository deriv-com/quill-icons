import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateXlRegularIcon = (
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
      <path d='M22.5 27V15h-5.25A2.22 2.22 0 0 1 15 12.75V7.5H9c-.844 0-1.5.703-1.5 1.5v3c-.422 0-.844.047-1.219.188-.093.046-.234.14-.281.14v.047V9c0-1.64 1.313-3 3-3h7.313c.562 0 1.171.281 1.593.703l5.39 5.39c.423.423.704 1.032.704 1.595V27c0 1.688-1.36 3-3 3H10.36c.093-.234.14-.469.14-.75v-.75H21c.797 0 1.5-.656 1.5-1.5m-.047-13.5c-.047-.094-.094-.234-.187-.328l-5.438-5.438c-.094-.093-.234-.14-.328-.187v5.203c0 .422.328.75.75.75zm-10.781 6v.047s0 .094.187.469a1.76 1.76 0 0 1-.562 2.015c-.328.235-.375.328-.375.328 0 .047-.047.141-.094.516a1.695 1.695 0 0 1-1.5 1.5c-.187 0-.281.047-.328.047v4.828c0 .281-.187.563-.422.703a.85.85 0 0 1-.75-.047L6 28.688l-1.875 1.218c-.187.14-.516.14-.75.047-.234-.14-.375-.422-.375-.703v-4.828c-.094 0-.187-.047-.375-.047-.797-.14-1.36-.703-1.5-1.5-.047-.422-.047-.469-.094-.516 0 0-.047-.093-.375-.328a1.76 1.76 0 0 1-.562-2.015c.187-.375.187-.47.187-.516 0 0 0-.094-.187-.469a1.76 1.76 0 0 1 .562-2.015c.328-.235.375-.328.375-.328 0-.047.047-.141.094-.516.14-.797.703-1.406 1.5-1.5.422-.047.469-.094.516-.094 0 0 .093-.047.328-.375a1.76 1.76 0 0 1 2.015-.562c.375.187.47.187.516.187 0 0 .094 0 .469-.187a1.76 1.76 0 0 1 2.015.562c.282.328.329.375.375.375 0 0 .094.047.47.094a1.695 1.695 0 0 1 1.5 1.5c.046.375.093.469.093.515 0 0 .047.094.375.329.61.468.844 1.312.562 2.015-.14.375-.187.469-.187.469M4.5 27.89l1.078-.75a.8.8 0 0 1 .797 0l1.125.75V25.5c-.375.047-.703.047-1.031-.094C6.094 25.22 6 25.22 6 25.22c-.047 0-.14 0-.516.187-.328.14-.656.14-.984.094zM1.781 19.5c0 .422-.14.75-.281 1.078-.047.094 0 .188.094.281.281.235.562.422.75.75s.234.703.281 1.078c0 .094.094.188.188.188.374.047.75.094 1.078.281s.562.469.75.75c.093.094.187.14.28.094.329-.14.657-.281 1.079-.281.375 0 .703.14 1.031.281.094.047.188 0 .282-.094.234-.281.421-.562.75-.75.328-.187.703-.234 1.078-.281a.2.2 0 0 0 .187-.187c.047-.375.094-.75.281-1.079s.47-.562.797-.75c.047-.093.094-.187.047-.28-.14-.329-.281-.657-.281-1.079 0-.375.14-.703.281-1.031.047-.094 0-.188-.047-.282-.328-.234-.61-.421-.797-.75-.187-.328-.234-.703-.28-1.078a.2.2 0 0 0-.188-.187c-.375-.047-.75-.094-1.078-.281s-.516-.47-.75-.797c-.094-.047-.188-.094-.282-.047-.328.14-.656.281-1.031.281-.422 0-.75-.14-1.078-.281-.094-.047-.188 0-.281.047-.235.328-.422.61-.75.797s-.703.234-1.078.28a.2.2 0 0 0-.188.188c-.047.375-.094.75-.281 1.078s-.469.516-.75.75c-.094.094-.14.188-.094.282.14.328.281.656.281 1.031' />
    </g>
    <defs>
      <clipPath id='6a6b1593dd2a1f0344b93bd0db7a9aad__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateXlRegularIcon);
export default ForwardRef;
