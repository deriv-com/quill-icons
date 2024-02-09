import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M28.406 6.422q.281.609-.328.984l-3 1.5q-.655.281-.984-.328-.281-.655.328-.984l3-1.5q.609-.282.984.328M14.25 6.75q.047-.703.75-.75.703.046.75.75v.797q2.906.329 4.781 2.39Q22.454 12.002 22.5 15v1.36q.046 3.187 2.25 5.484l.14.14q.61.61.61 1.453 0 .891-.61 1.454-.562.609-1.453.609H6.564q-.891 0-1.454-.61-.609-.562-.609-1.453 0-.843.61-1.5l.14-.093q2.203-2.298 2.25-5.485V15q.094-3 1.969-5.062t4.781-2.391zM15 9q-2.531.047-4.266 1.734Q9.047 12.47 9 15v1.36q-.046 3.796-2.719 6.515l-.093.14a.58.58 0 0 0-.188.422q.047.516.563.563h16.875q.514-.047.562-.562a.58.58 0 0 0-.187-.422l-.094-.141Q21.046 20.157 21 16.359V15q-.047-2.531-1.781-4.266Q17.53 9.047 15 9m-1.406 18.516q.375.938 1.406.984 1.032-.047 1.406-.984.282-.657.985-.47.61.282.422.938a3.13 3.13 0 0 1-1.079 1.453Q15.984 30 15 30a2.8 2.8 0 0 1-1.734-.562 3.13 3.13 0 0 1-1.078-1.454q-.188-.656.421-.937.704-.188.985.469M0 14.25q.047-.703.75-.75H4.5q.704.047.75.75-.046.703-.75.75H.75q-.703-.047-.75-.75m25.5-.75h3.75q.704.047.75.75-.046.703-.75.75H25.5q-.704-.047-.75-.75.046-.703.75-.75M1.922 7.406q-.61-.375-.328-.984.328-.61.984-.328l3 1.5q.61.328.328.984-.328.61-.984.328z' />
    </g>
    <defs>
      <clipPath id='2bbc2ea801bd8b4b6b5711d936f5066d__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnXlRegularIcon);
export default ForwardRef;
