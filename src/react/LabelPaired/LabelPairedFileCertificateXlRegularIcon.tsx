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
      <path d='M22.5 27V15h-5.25a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 15 12.75V7.5H9q-.656 0-1.078.422Q7.5 8.343 7.5 9v3a2.5 2.5 0 0 0-1.172.188q-.14.046-.281.093 0 .047-.047.047V9q.047-1.266.89-2.11Q7.735 6.048 9 6h7.313a2.17 2.17 0 0 1 1.593.656l5.438 5.438q.656.656.656 1.594V27q-.047 1.266-.89 2.11-.844.843-2.11.89H10.36q.14-.375.14-.75v-.75H21q.657 0 1.078-.422.422-.421.422-1.078m0-13.5a1.3 1.3 0 0 0-.234-.328l-5.438-5.438a.7.7 0 0 0-.328-.187v5.203q.046.703.75.75zM3.281 22.828q.75.094 1.219.703l.328.375.469-.187a1.83 1.83 0 0 1 1.406 0l.469.187.328-.375a1.76 1.76 0 0 1 1.219-.703l.515-.094.094-.515 1.453.234-.094.75q-.14.844-.984.985L9 24.28v4.969q0 .422-.375.656a.8.8 0 0 1-.797-.047L6 28.641l-1.828 1.218q-.375.235-.75.047Q3 29.672 3 29.25v-4.969l-.703-.093q-.844-.14-.985-.985l-.093-.797a.6.6 0 0 0-.14-.234l-.657-.469q-.61-.562-.328-1.312l.281-.75a.43.43 0 0 0 0-.282l-.281-.75q-.281-.75.328-1.312l.656-.469.89 1.172-.374.328.187.469q.282.703 0 1.406l-.187.469.375.328-.89 1.172.89-1.172q.609.47.75 1.219l.047.515zl-.094.703zm-2.203-6a.6.6 0 0 0 .14-.234l.095-.797q.14-.844.984-.985l.797-.093a.6.6 0 0 0 .234-.14l.469-.657q.562-.61 1.312-.328l.75.281a.43.43 0 0 0 .282 0l.75-.281q.75-.281 1.312.328l.469.656q.093.095.281.14l.797.095q.797.14.938.984l.093.797a.6.6 0 0 0 .14.234l.657.469q.61.562.328 1.312l-.281.75a.43.43 0 0 0 0 .282l.281.75q.281.75-.328 1.312l-.656.469a.6.6 0 0 0-.14.234l-1.454-.187q.094-.75.703-1.219l.375-.328-.187-.469a1.83 1.83 0 0 1 0-1.406l.187-.469-.375-.328a1.76 1.76 0 0 1-.703-1.219l-.094-.515-.515-.047a1.94 1.94 0 0 1-1.219-.75l-.328-.375-.469.187-.516-1.312.516 1.312a1.83 1.83 0 0 1-1.406 0l-.469-.187-.328.375a1.94 1.94 0 0 1-1.219.75l-.515.047-.047.515-1.36-.187 1.36.187q-.141.75-.75 1.219zM7.5 27.844V25.5q-.328.047-.61-.094l-.75-.281a.234.234 0 0 0-.28 0l-.75.281q-.282.14-.61.094v2.344l1.078-.703q.422-.282.844 0z' />
    </g>
    <defs>
      <clipPath id='8f3f9461667f5c0b8c3e90adbfb650ef__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateXlRegularIcon);
export default ForwardRef;
