from email import header
import json

import sys
import json
import urllib.request


def main():
    count = 0
    with open(sys.argv[1], 'r') as json_file:
        sources = json.load(json_file)
        for cat in sources:
            for entry in cat['entries']:
                url = entry['url']
                headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:103.0) Gecko/20100101 Firefox/103.0'}
                req = urllib.request.Request(url, headers=headers)
                try: urllib.request.urlopen(req)
                except urllib.error.URLError as e: 
                    count = count + 1
                    print(f"{cat['type']} => {entry['name']}\n{url} responded with {e}")
    return count

if __name__ == '__main__':
    count = main()
    if count > 0:
        exit(1)